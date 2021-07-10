module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'svelte'
  ],
  transform: {
    '^.+\\.svelte$': [
      "svelte-jester",
      {
        preprocess: true
      }
    ],
    '^.+\\.ts$': "ts-jest"
  }
};