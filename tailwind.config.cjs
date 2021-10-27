const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        primary: "white",
        secondary: "#708090",
        accent: "#f92672",

        "primary-dark": "#708090",
        "secondary-dark": "white",
        "accent-dark": "#f92672",
      },
    },
  },

  plugins: [],
};

module.exports = config;
