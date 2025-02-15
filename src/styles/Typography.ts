import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents, config }) => {
  addComponents({
    ".text-desktop-lg": {
      fontFamily: config("theme.fontFamily.dm-serif-display"),
      fontSize: "72px",
      lineHeight: "96px",
    },
    ".text-desktop-md": {
      fontFamily: config("theme.fontFamily.dm-serif-display"),
      fontSize: " 64px",
      lineHeight: "80px",
    },
    ".text-desktop-sm": {
      fontFamily: config("theme.fontFamily.dm-serif-display"),
      fontSize: "56px",
      lineHeight: "72px",
    },
    ".text-desktop-xs": {
      fontFamily: config("theme.fontFamily.dm-serif-display"),
      fontSize: "48px",
      lineHeight: "64px",
    },
    ".text-desktop-h1": {
      fontFamily: config("theme.fontFamily.dm-serif-display"),
      fontSize: "40px",
      lineHeight: "48px",
    },
    ".text-desktop-h2": {
      fontFamily: config("theme.fontFamily.dm-serif-display"),
      fontSize: "32px",
      lineHeight: "40px",
    },
    ".text-desktop-h3": {
      fontFamily: config("theme.fontFamily.dm-serif-display"),
      fontSize: "28px",
      lineHeight: "36px",
    },
    ".text-desktop-h4": {
      fontFamily: config("theme.fontFamily.dm-serif-display"),
      fontSize: "24px",
      lineHeight: "32px",
    },
    ".text-desktop-h5": {
      fontFamily: config("theme.fontFamily.dm-serif-display"),
      fontSize: "20px",
      lineHeight: "28px",
    },
    ".text-desktop-h6": {
      fontFamily: config("theme.fontFamily.dm-serif-display"),
      fontSize: "16px",
      lineHeight: "24px",
    },
    ".text-body-xl": {
      fontFamily: config("theme.fontFamily.onset"),
      fontSize: "18px",
      lineHeight: "28px",
    },
    ".text-body-lg": {
      fontFamily: config("theme.fontFamily.onset"),
      fontSize: "16px",
      lineHeight: "24px",
    },
    ".text-body-md": {
      fontFamily: config("theme.fontFamily.onset"),
      fontSize: "14px",
      lineHeight: "20px",
    },
    ".text-body-sm": {
      fontFamily: config("theme.fontFamily.onset"),
      fontSize: "12px",
      lineHeight: "18px",
    },
    ".text-body-xs": {
      fontFamily: config("theme.fontFamily.onset"),
      fontSize: "10px",
      lineHeight: "16px",
    },
  });
});
