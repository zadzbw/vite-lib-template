const config = {
  compilationOptions: {
    preferredConfigPath: './tsconfig.types.json',
  },
  entries: [
    {
      filePath: './src/index.ts',
      outFile: './dist/index.d.ts',
      noCheck: false,
      output: {
        noBanner: true,
      },
    },
  ],
}

module.exports = config
