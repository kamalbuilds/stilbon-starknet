export enum StilBonPlan {
	Free = 'FREE',
	Pro = 'PRO',
	Degen = 'DEGEN',
}
interface PlanDetails {
	expirationDays: number;
	dailyRequests: number;
}

const PlanDetailsMap: Record<StilBonPlan, PlanDetails> = {
	[StilBonPlan.Free]: {
		expirationDays: 0,
		dailyRequests: 10,
	},
	[StilBonPlan.Pro]: {
		expirationDays: 30,
		dailyRequests: 50,
	},
	[StilBonPlan.Degen]: {
		expirationDays: 30,
		dailyRequests: Infinity,
	},
};

export const getPlanDetails = (plan: StilBonPlan): PlanDetails => {
	return PlanDetailsMap[plan];
};

export const isValidUserType = (user_type: any): boolean => {
	return Object.values(StilBonPlan).includes(user_type);
};

export const getStilBonPlanFromString = (
	planString: string
): StilBonPlan | null => {
	switch (planString.toUpperCase()) {
		case StilBonPlan.Free:
			return StilBonPlan.Free;
		case StilBonPlan.Pro:
			return StilBonPlan.Pro;
		case StilBonPlan.Degen:
			return StilBonPlan.Degen;
		default:
			return null;
	}
};
