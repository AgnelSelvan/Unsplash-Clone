module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
