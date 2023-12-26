import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"card-white": "hsl(0, 0%, 100%)",
				"card-black": "hsl(0, 0%, 7%)",
				"card-gray": "hsl(0, 0%, 50%)",
				"card-yellow": "hsl(47, 88%, 63%)",
			},
		},
	},
	plugins: [],
};
export default config;
