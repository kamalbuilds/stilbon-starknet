import supabase from '../lib/supabase';

const addEmail = async (email: any): Promise<string | null> => {
	try {
		const { data, error } = await supabase
			.from('waitlist')
			.insert([email])
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

export default {
	addEmail,
};
