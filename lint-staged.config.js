module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    // do not pass args to the script
    () => 'npm run type:check',
    () => 'npm run test',
    'npm run lint:staged',
    'npm run format:staged',
  ],
  'src/**/*.{css,scss,json,yml,yaml}': ['prettier --write'],
}
