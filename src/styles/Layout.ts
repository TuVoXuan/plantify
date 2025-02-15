import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, config }) => {
  addComponents({
    ".container-cs": {
      maxWidth: "100%",
      "@screen md": {
        maxWidth: "754px",
        marginLeft: "auto",
        marginRight: "auto",
      },
      "@screen lg": {
        maxWidth: "984px",
      },
      "@screen xl": {
        maxWidth: "1200px",
      },
      "@screen 2xl": {
        maxWidth: "1280px",
      },
    },
  });
});
