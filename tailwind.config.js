const colors = {
  purple: {
    900: "hsl(262, 100%, 20%)",
    800: "hsl(262, 100%, 30%)",
    700: "hsl(262, 100%, 40%)",
    600: "hsl(262, 100%, 50%)",
    500: "hsl(262, 100%, 60%)",
    400: "hsl(262, 100%, 70%)",
    300: "hsl(262, 100%, 80%)",
    200: "hsl(262, 100%, 90%)",
    100: "hsl(262, 100%, 92%)",
    50: "hsl(262, 100%, 94%)",
    20: "hsl(262, 100%, 96%)",
  },
  slate: {
    900: "hsl(220, 17%, 5%)",
    800: "hsl(220, 17%, 14%)",
    700: "hsl(220, 17%, 24%)",
    600: "hsl(220, 17%, 34%)",
    500: "hsl(220, 17%, 44%)",
    400: "hsl(220, 17%, 54%)",
    300: "hsl(220, 17%, 64%)",
    200: "hsl(220, 17%, 74%)",
    100: "hsl(220, 17%, 84%)",
    50: "hsl(220, 17%, 94%)",
    20: "hsl(220, 17%, 98%)",
  },
  red: {
    900: "hsl(355, 100%, 24%)",
    800: "hsl(355, 100%, 34%)",
    700: "hsl(355, 100%, 44%)",
    600: "hsl(355, 100%, 54%)",
    500: "hsl(355, 100%, 64%)",
    400: "hsl(355, 100%, 74%)",
    300: "hsl(355, 100%, 84%)",
    200: "hsl(355, 100%, 94%)",
    100: "hsl(355, 100%, 96%)",
    50: "hsl(355, 100%, 98%)",
  },
  yellow: {
    900: "hsl(44, 100%, 10%)",
    800: "hsl(44, 100%, 20%)",
    700: "hsl(44, 100%, 30%)",
    600: "hsl(44, 100%, 40%)",
    500: "hsl(44, 100%, 50%)",
    400: "hsl(44, 100%, 60%)",
    300: "hsl(44, 100%, 70%)",
    200: "hsl(44, 100%, 80%)",
    100: "hsl(44, 100%, 90%)",
    50: "hsl(44, 100%, 95%)",
  },
  blue: {
    900: "hsl(222, 100%, 15%)",
    800: "hsl(222, 100%, 25%)",
    700: "hsl(222, 100%, 35%)",
    600: "hsl(222, 100%, 45%)",
    500: "hsl(222, 100%, 55%)",
    400: "hsl(222, 100%, 65%)",
    300: "hsl(222, 100%, 75%)",
    200: "hsl(222, 100%, 85%)",
    100: "hsl(222, 100%, 95%)",
    50: "hsl(222, 100%, 97%)",
  },
  green: {
    900: "hsl(115, 57%, 10%)",
    800: "hsl(115, 57%, 20%)",
    700: "hsl(115, 57%, 30%)",
    600: "hsl(115, 57%, 40%)",
    500: "hsl(115, 57%, 50%)",
    400: "hsl(115, 57%, 60%)",
    300: "hsl(115, 57%, 70%)",
    200: "hsl(115, 57%, 80%)",
    100: "hsl(115, 57%, 90%)",
    50: "hsl(115, 57%, 95%)",
  },
};

module.exports = {
  darkMode: "class",
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors["blue"],
        secondary: colors["purple"],
        warning: colors["yellow"],
        error: colors["red"],
        success: colors["green"],
        info: colors["slate"],
        ...colors,
      },
      screens: {
        ipad: { max: "768px" },
        tablet: { max: "740px" },
        mobile: { max: "420px" },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
};