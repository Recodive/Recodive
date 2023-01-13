import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		deps: {
			interopDefault: true,
		},
		coverage: {
			reporter: ["json-summary", "text"],
		},
	},
});
