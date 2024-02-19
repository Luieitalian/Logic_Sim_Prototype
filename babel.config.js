module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'], // Set the root directory for your project
        alias: {
          '@': './', // Define the alias (@ symbol) and map it to your root directory
        },
      },
    ],
  ],
};
