import lint from "@commitlint/lint";
import { describe, expect, test } from "vitest";

import commitlint from "../packages/configs/configs/.commitlintrc.js";

describe("commitlint", () => {
	const { rules, parserPreset } = commitlint,
		//@ts-expect-error - module issue
		lintMessage = async (message: string) => lint(message.replace(/^\s+/, "").trim(), rules, parserPreset);

	test("a valid commit message", async () => {
		let { valid, errors, warnings } = await lintMessage("feat(RCD-1): a valid commit message");

		expect(valid).toBe(true);
		expect(errors).toStrictEqual([]);
		expect(warnings).toStrictEqual([]);

		({ valid, errors, warnings } = await lintMessage("wip: a valid commit message"));

		expect(valid).toBe(true);
		expect(errors).toStrictEqual([]);
		expect(warnings).toStrictEqual([]);

		({ valid, errors, warnings } = await lintMessage("fix(configs): a valid commit message"));

		expect(valid).toBe(true);
		expect(errors).toStrictEqual([]);
		expect(warnings).toStrictEqual([]);
	});

	test("a valid multi line commit", async () => {
		const { valid, errors, warnings } = await lintMessage(
			`test(configs): a valid angular commit with a scope

		Some content in the body`
		);

		expect(valid).toBe(true);
		expect(errors).toStrictEqual([]);
		expect(warnings).toStrictEqual([]);
	});

	test("a leading blank line after header", async () => {
		const { valid, errors, warnings } = await lintMessage(
			`test(configs): a valid angular commit with a scope
		Some content in the body`
		);

		expect(valid).toBe(false);
		expect(errors[0].message).toBe("body must have leading blank line");
		expect(warnings).toStrictEqual([]);
	});

	test("an invalid scope", async () => {
		const { valid, errors, warnings } = await lintMessage("no: no is not not an invalid commit type");

		expect(valid).toBe(false);
		expect(errors[0].message).toBe("type must be one of [build, ci, cd, docs, feat, fix, perf, refactor, style, test, chore, wip, revert]");
		expect(warnings).toStrictEqual([]);
	});

	test("no type", async () => {
		const { valid, errors, warnings } = await lintMessage("no is not not an invalid commit type");

		expect(valid).toBe(false);
		expect(errors[0].message).toBe("type may not be empty");
		expect(warnings).toStrictEqual([]);
	});

	test("a long header", async () => {
		const { valid, errors, warnings } = await lintMessage("test(configs): that its an error when there is ia realllllllllllllllllllllly long header");

		expect(valid).toBe(false);
		expect(errors[0].message).toBe("header must not be longer than 72 characters, current length is 88");
		expect(warnings).toStrictEqual([]);
	});

	test("message header with ! in it", async () => {
		const { valid, errors, warnings } = await lintMessage("test!: with a breaking change in the type");

		expect(valid).toBe(true);
		expect(errors).toStrictEqual([]);
		expect(warnings).toStrictEqual([]);
	});

	test("message header with ! in it and a scope", async () => {
		const { valid, errors, warnings } = await lintMessage("test(configs)!: with a breaking change in the type");

		expect(valid).toBe(true);
		expect(errors).toStrictEqual([]);
		expect(warnings).toStrictEqual([]);
	});

	test("a subject must be set", async () => {
		const { valid, errors, warnings } = await lintMessage("test(configs):");

		expect(valid).toBe(false);
		expect(errors[0].message).toBe("type may not be empty");
		expect(warnings).toStrictEqual([]);
	});

	test("a colon must be set", async () => {
		const { valid, errors, warnings } = await lintMessage("test(configs) dwadwadwa");

		expect(valid).toBe(false);
		expect(errors[0].message).toBe("type may not be empty");
		expect(warnings).toStrictEqual([]);
	});

	test("you should be able to revert commits", async () => {
		let { valid, errors, warnings } = await lintMessage("revert(configs): feat(configs): a valid commit message");

		expect(valid).toBe(true);
		expect(errors).toStrictEqual([]);
		expect(warnings).toStrictEqual([]);

		({ valid, errors, warnings } = await lintMessage("revert(configs): a valid commit message"));

		expect(valid).toBe(true);
		expect(errors).toStrictEqual([]);
		expect(warnings).toStrictEqual([]);
	});

	test("you should be able to revert commits and make breaking changes in them", async () => {
		const { valid, errors, warnings } = await lintMessage("revert(configs)!: feat(configs): a valid commit message");

		expect(valid).toBe(true);
		expect(errors).toStrictEqual([]);
		expect(warnings).toStrictEqual([]);
	});

	test("you should be able to revert commits that have breaking changes and make breaking changes in them", async () => {
		const { valid, errors, warnings } = await lintMessage("revert(configs)!: feat(configs)!: a valid commit message");

		expect(valid).toBe(true);
		expect(errors).toStrictEqual([]);
		expect(warnings).toStrictEqual([]);
	});
});
