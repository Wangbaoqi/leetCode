module.exports = {
  presets: [
    [
      '@babel/presets-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ]
}