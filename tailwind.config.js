const { boxShadow } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontFamily: {
      sonTi: ["STSongti-SC-Regular", "STSongti-SC"],
      display: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    inset: {
      9.25: "2.3125rem",
      12.25: "3.0625rem",
      14.75: "3.6875rem",
      15: "3.75rem",
    },
    fontSize: {
      5.25: "1.3125rem",
      8.25: "2.0625rem",
      16.5: "4.125rem",
    },
    spacing: {
      6.25: "1.5625rem",
      8.125: "2.03rem",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      gray: "#d6dced",
    }),
    customForms: (theme) => ({
      default: {
        input: {
          backgroundColor: theme("colors.gray.900"),
          "&::placeholder": {
            color: theme("colors.gray.500"),
            opacity: "1",
          },
          "&:focus": {
            outline: "none",
            boxShadow: theme("boxShadow.none"),
            borderColor: theme("colors.orange.500"),
          },
        },
      },
    }),
    extend: {
      boxShadow: {
        ...boxShadow,
        outline: "0 0 0 3px rgba(239, 121, 48, 0.5)",
      },
      width: {
        halfScreen: "50vw",
      },
      padding: {
        2.5: "0.625rem",
        3: "0.75rem",
        3.9: "0.975rem",
        3.25: "0.813rem",
        4.5: "1.125rem",
        4.75: "1.1875rem",
        5.85: "1.463rem",
        11: "2.75rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
  purge: {
    enabled: true,
    content: ["./public/*.html", "./src/*.tsx", "./src/**/*.tsx"],
  },
};
