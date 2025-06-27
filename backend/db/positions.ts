import supabase from '../lib/supabase';

const getAllPositions = async (): Promise<any[]> => {
	try {
		const { data, error } = await supabase
			.from('positions')
			.select('*')
			.order('add_date', { ascending: false });

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

const getPositionById = async (id: string): Promise<any | null> => {
	try {
		const { data, error } = await supabase
			.from('positions')
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

const createPosition = async (position: any): Promise<string | null> => {
	try {
		position.add_date = new Date().toISOString();
		
		const { data, error } = await supabase
			.from('positions')
			.insert([position])
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

const updatePosition = async (position: any): Promise<any | null> => {
	try {
		const { id, ...updateData } = position;

		const { data, error } = await supabase
			.from('positions')
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
		console.error('Error updating position:', error);
		return null;
	}
};

const deletePosition = async (id: string): Promise<boolean> => {
	try {
		const { error } = await supabase
			.from('positions')
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

export default {
	getAllPositions,
	getPositionById,
	createPosition,
	updatePosition,
	deletePosition,
};
