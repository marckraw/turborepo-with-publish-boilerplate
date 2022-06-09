module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-bigstair`
  extends: ['marckraw'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
