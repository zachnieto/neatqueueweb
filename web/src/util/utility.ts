export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const calculateTimeLeft = (timestamp: number) => {
	const difference = new Date(timestamp * 1000).getTime() - Date.now();

	let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

	if (difference > 0) {
		timeLeft = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
	}
	return timeLeft;
};

export const displayPercent = (percent: number): string =>
	`${(percent * 100).toFixed(1)}%`;

export const floatToNDecimalsString = (num: number, decimals: number = 2) => {
	const regex = new RegExp(`^-?\\d+(?:\\.\\d{0,${decimals}})?`);
	const match = num.toString().match(regex);
	return match ? match[0] : null;
};

export const floatToNDecimals = (num: number, decimals: number = 2) => {
	const regex = new RegExp(`^-?\\d+(?:\\.\\d{0,${decimals}})?`);
	const match = num.toString().match(regex);
	// @ts-expect-error
	return Number(match[0]);
};

export const floatToPrice = (num: number) => {
	return Math.ceil(num * 100) / 100;
};
