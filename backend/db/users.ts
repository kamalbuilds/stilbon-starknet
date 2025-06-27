import supabase from '../lib/supabase';
import { getFutureDate } from '../utils/utils';
import {
	StilBonPlan,
	getStilBonPlanFromString,
	getPlanDetails,
} from '../enums/plans';

const getAllUsers = async (): Promise<any[]> => {
	try {
		const { data, error } = await supabase
			.from('users')
			.select('*')
			.order('created_at', { ascending: false })
			.limit(100);

		if (error) {
			console.error('Supabase error:', error);
			return [];
		}

		return data || [];
	} catch (e) {
		console.error(e);
		return [];
	}
};

const getUserById = async (id: string): Promise<any | null> => {
	try {
		const { data, error } = await supabase
			.from('users')
			.select('*')
			.eq('id', id)
			.single();

		if (error) {
			console.error('Supabase error:', error);
			return null;
		}

		return data;
	} catch (e) {
		console.error(e);
		return null;
	}
};

const getUserByUId = async (uId: string): Promise<any | null> => {
	try {
		const { data, error } = await supabase
			.from('users')
			.select('*')
			.eq('uId', uId)
			.single();

		if (error && error.code !== 'PGRST116') { // PGRST116 is "not found" error
			console.error('Supabase error:', error);
		}

		return data || null;
	} catch (e) {
		console.error(e);
		return null;
	}
};

const createUser = async (user: any): Promise<string | null> => {
	try {
		// Check if user already exists
		const existingUser = await getUserByUId(user.uId);

		if (existingUser) {
			console.log('User with this uId already exists.');
			return existingUser.id.toString();
		}

		const planDetails = getPlanDetails(user.user_type);
		if (planDetails) {
			if (user.user_type === StilBonPlan.Free) {
				user.plan_exp_date = null;
			} else {
				user.plan_exp_date = getFutureDate(planDetails.expirationDays);
			}
			user.remaining_requests = planDetails.dailyRequests;
		}

		const { data, error } = await supabase
			.from('users')
			.insert([user])
			.select('id')
			.single();

		if (error) {
			console.error('Supabase error:', error);
			return null;
		}

		return data?.id?.toString() || null;
	} catch (e) {
		console.error('Database error:', e);
		return null;
	}
};

const updateUser = async (user: any): Promise<any | null> => {
	try {
		const { id, ...updateData } = user;

		const { data, error } = await supabase
			.from('users')
			.update(updateData)
			.eq('id', id)
			.select()
			.single();

		if (error) {
			console.error('Supabase error:', error);
			return null;
		}

		return data;
	} catch (error) {
		console.error('Error updating user:', error);
		return null;
	}
};

const deleteUser = async (id: string): Promise<boolean> => {
	try {
		const { error } = await supabase
			.from('users')
			.delete()
			.eq('id', id);

		if (error) {
			console.error('Supabase error:', error);
			return false;
		}

		return true;
	} catch (e) {
		console.error(e);
		return false;
	}
};

const updateUserType = async (
	uId: string,
	newUserType: string
): Promise<Object | null> => {
	try {
		const userDb = await getUserByUId(uId);

		if (!userDb) {
			console.error('User not found.');
			return null;
		}

		const newPlan = getStilBonPlanFromString(newUserType);
		if (!newPlan) {
			console.error('User plan not found');
			return null;
		}

		const planDetails = getPlanDetails(newPlan);
		if (!planDetails) {
			console.error('Plan details not found.');
			return null;
		}

		const updateData = {
			user_type: newPlan,
			remaining_requests: planDetails.dailyRequests,
			plan_exp_date:
				newPlan === StilBonPlan.Free
					? null
					: getFutureDate(planDetails.expirationDays),
		};

		const { data, error } = await supabase
			.from('users')
			.update(updateData)
			.eq('uId', uId)
			.select()
			.single();

		if (error) {
			console.error('Supabase error:', error);
			return null;
		}

		return data;
	} catch (error) {
		console.error('Error updating user plan:', error);
		return null;
	}
};

const updateEkuboFavPools = async (
	uId: string,
	newEkuboFavPool: {
		token0: string;
		token1: string;
		fee: number;
		tickSpacing: number;
	}
): Promise<Object | null> => {
	try {
		const userDb = await getUserByUId(uId);

		if (!userDb) {
			console.error('User not found.');
			return null;
		}

		const existingPools: Array<{
			token0: string;
			token1: string;
			fee: number;
			tickSpacing: number;
		}> = userDb.ekubo_fav_pools || [];

		const isDuplicate = existingPools.some(
			(pool) =>
				pool.token0 === newEkuboFavPool.token0 &&
				pool.token1 === newEkuboFavPool.token1 &&
				pool.fee === newEkuboFavPool.fee &&
				pool.tickSpacing === newEkuboFavPool.tickSpacing
		);

		if (isDuplicate) {
			console.log('Pool already exists in favorites.');
			return { uId, ekubo_fav_pools: existingPools };
		}

		const updatedPools = [...existingPools, newEkuboFavPool];

		const { data, error } = await supabase
			.from('users')
			.update({ ekubo_fav_pools: updatedPools })
			.eq('uId', uId)
			.select()
			.single();

		if (error) {
			console.error('Supabase error:', error);
			return null;
		}

		return data;
	} catch (error) {
		console.error('Error updating Ekubo favorites:', error);
		return null;
	}
};

const removeEkuboFavPool = async (
	uId: string,
	pool: { token0: string; token1: string; fee: number; tickSpacing: number }
): Promise<Object | null> => {
	try {
		const userDb = await getUserByUId(uId);

		if (!userDb) {
			console.error('User not found.');
			return null;
		}

		const existingPools: Array<{
			token0: string;
			token1: string;
			fee: number;
			tickSpacing: number;
		}> = userDb.ekubo_fav_pools || [];

		const updatedPools = existingPools.filter(
			(existingPool) =>
				!(
					existingPool.token0 === pool.token0 &&
					existingPool.token1 === pool.token1 &&
					existingPool.fee === pool.fee &&
					existingPool.tickSpacing === pool.tickSpacing
				)
		);

		const { data, error } = await supabase
			.from('users')
			.update({ ekubo_fav_pools: updatedPools })
			.eq('uId', uId)
			.select()
			.single();

		if (error) {
			console.error('Supabase error:', error);
			return null;
		}

		return data;
	} catch (error) {
		console.error('Error removing Ekubo favorite:', error);
		return null;
	}
};

const updateVesuFavPools = async (
	uId: string,
	newVesuFavPool: {
		asset: string;
		ltv: number;
		name: string;
	}
): Promise<Object | null> => {
	try {
		const userDb = await getUserByUId(uId);

		if (!userDb) {
			console.error('User not found.');
			return null;
		}

		const existingPools: Array<{
			asset: string;
			ltv: number;
			name: string;
		}> = userDb.vesu_fav_pools || [];

		const isDuplicate = existingPools.some(
			(pool) =>
				pool.asset === newVesuFavPool.asset &&
				pool.ltv === newVesuFavPool.ltv &&
				pool.name === newVesuFavPool.name
		);

		if (isDuplicate) {
			console.log('Pool already exists in favorites.');
			return { uId, vesu_fav_pools: existingPools };
		}

		const updatedPools = [...existingPools, newVesuFavPool];

		const { data, error } = await supabase
			.from('users')
			.update({ vesu_fav_pools: updatedPools })
			.eq('uId', uId)
			.select()
			.single();

		if (error) {
			console.error('Supabase error:', error);
			return null;
		}

		return data;
	} catch (error) {
		console.error('Error updating Vesu favorites:', error);
		return null;
	}
};

const removeVesuFavPool = async (
	uId: string,
	pool: { asset: string; ltv: number; name: string }
): Promise<Object | null> => {
	try {
		const userDb = await getUserByUId(uId);

		if (!userDb) {
			console.error('User not found.');
			return null;
		}

		const existingPools: Array<{
			asset: string;
			ltv: number;
			name: string;
		}> = userDb.vesu_fav_pools || [];

		const updatedPools = existingPools.filter(
			(existingPool) =>
				!(
					existingPool.asset === pool.asset &&
					existingPool.ltv === pool.ltv &&
					existingPool.name === pool.name
				)
		);

		const { data, error } = await supabase
			.from('users')
			.update({ vesu_fav_pools: updatedPools })
			.eq('uId', uId)
			.select()
			.single();

		if (error) {
			console.error('Supabase error:', error);
			return null;
		}

		return data;
	} catch (error) {
		console.error('Error removing Vesu favorite:', error);
		return null;
	}
};

export default {
	getAllUsers,
	getUserById,
	getUserByUId,
	createUser,
	updateUser,
	deleteUser,
	updateUserType,
	updateEkuboFavPools,
	removeEkuboFavPool,
	updateVesuFavPools,
	removeVesuFavPool,
};
