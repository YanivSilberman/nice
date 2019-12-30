const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });

  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve(__dirname, '../src')
  ];

  config.resolve.alias = {
    nice: path.resolve(__dirname, '../src')
  };
  
  return config
}