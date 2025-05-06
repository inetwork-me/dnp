import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	resolvePluginsRelativeTo: __dirname,
});

const eslintConfig = [...compat.extends('next/core-web-vitals')];

export default [
	...eslintConfig,
	{
		plugins: {
			import: await import('eslint-plugin-import'),
		},
		rules: {
			// ✅ Enforce case-sensitive paths
			'import/no-unresolved': ['error', { caseSensitive: true }],
		},
	},
];
