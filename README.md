# Carimus ESLint Config for React

The prettier config used by Carimus React web projects.

-   Extends [`@carimus/eslint-config-web`](https://github.com/Carimus/eslint-config-web)
-   Adds the [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) plugin
-   Adds the [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) plugin
-   Adds the React recommended rules, the [`react-hooks/rules-of-hooks`](https://reactjs.org/docs/hooks-rules.html)
    rule, and some minor tweaks built-up over time across projects to promote healthier code

### Important Note

Even though `eslint-prettier-config` is applied in `@carimus/eslint-config-web`, we need to reapply it in this config
since it's designed to turn off rules that might conflict with prettier and as such must always be applied last. ESLint
handles deduping for us so it's fine that we specify `prettier` and `prettier/standard` multiple times (once here and
once in the `@carimus/eslint-config-web` config).
