module.exports = {
  root: true,
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    'prettier',
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "unused-imports",
    "prettier",
    "import"
  ],
  "rules": {
    "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
		"unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": [
			"error",
			{ "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
		],
    'unused-imports/no-unused-imports-ts': 'error',
    "prettier/prettier": "error",
    "import/order": ["error", {
      "groups": [["builtin", "external", "internal"], ["parent", "sibling", "index"]],
      "newlines-between": "always"
    }]
  },
  "overrides": [
    {
        "files": ["**/*.tsx"],
        "rules": {
            "react/prop-types": "off"
        }
    }
  ],
  "settings": {
    "react": {
      "version": "detect"
    },
  },
  // eslintの対象外ファイル
  "ignorePatterns": [
    "**/public/*",
    "**/node_modules/*",
    "**/.vscode/*",
    ".eslintrc.js",
    ".prettierrc.js",
    "webpack.config.js",
  ],
}