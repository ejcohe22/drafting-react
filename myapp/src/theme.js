import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        gray: {
          100: "#e5e6e7",
          200: "#cbcdcf",
          300: "#b2b3b8",
          400: "#989aa0",
          500: "#7e8188",
          600: "#65676d",
          700: "#4c4d52",
          800: "#323436",
          900: "#191a1b"
        },
        primary: {
          100: "#ccccd0",
          200: "#9a9aa1",
          300: "#676771",
          400: "#353542",
          500: "#020213",
          600: "#02020f",
          700: "#01010b",
          800: "#010108",
          900: "#000004"
        },
        greenAccent: {
          100: "#e0f1ea",
          200: "#c0e3d5",
          300: "#a1d4bf",
          400: "#81c6aa",
          500: "#62b895",
          600: "#4e9377",
          700: "#3b6e59",
          800: "#274a3c",
          900: "#14251e"
        },
        yellowAccent: {
          100: "#fef7e5",
          200: "#fcefcb",
          300: "#fbe6b0",
          400: "#f9de96",
          500: "#f8d67c",
          600: "#c6ab63",
          700: "#95804a",
          800: "#635632",
          900: "#322b19",
        },
        redAccent: {
          100: "#f7dfde",
          200: "#eebfbd",
          300: "#e69f9d",
          400: "#dd7f7c",
          500: "#d55f5b",
          600: "#aa4c49",
          700: "#803937",
          800: "#552624",
          900: "#2b1312"
        },
        blueAccent: {
          100: "#e2eaf4",
          200: "#c5d5e8",
          300: "#a8c0dd",
          400: "#8babd1",
          500: "#6e96c6",
          600: "#58789e",
          700: "#425a77",
          800: "#2c3c4f",
          900: "#161e28"
        },
      }
    : {
        gray: {
          100: "#191a1b",
          200: "#323436",
          300: "#4c4d52",
          400: "#65676d",
          500: "#7e8188",
          600: "#989aa0",
          700: "#b2b3b8",
          800: "#cbcdcf",
          900: "#e5e6e7",
        },
        primary: {
          100: "#000004",
          200: "#010108",
          300: "#01010b",
          400: "#bbbbbc", //manually change
          500: "#020213",
          600: "#353542",
          700: "#676771",
          800: "#9a9aa1",
          900: "#ccccd0",
        },
        greenAccent: {
          100: "#14251e",
          200: "#274a3c",
          300: "#3b6e59",
          400: "#4e9377",
          500: "#62b895",
          600: "#81c6aa",
          700: "#a1d4bf",
          800: "#c0e3d5",
          900: "#e0f1ea",
        },
        yellowAccent: {
          100: "#322b19",
          200: "#635632",
          300: "#95804a",
          400: "#c6ab63",
          500: "#f8d67c",
          600: "#f9de96",
          700: "#fbe6b0",
          800: "#fcefcb",
          900: "#fef7e5",
        },
        redAccent: {
          100: "#2b1312",
          200: "#552624",
          300: "#803937",
          400: "#aa4c49",
          500: "#d55f5b",
          600: "#dd7f7c",
          700: "#e69f9d",
          800: "#eebfbd",
          900: "#f7dfde",
        },
        blueAccent: {
          100: "#161e28",
          200: "#2c3c4f",
          300: "#425a77",
          400: "#58789e",
          500: "#6e96c6",
          600: "#8babd1",
          700: "#a8c0dd",
          800: "#c5d5e8",
          900: "#e2eaf4",
        },
     }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[700],
            },
            secondary: {
              main: colors.greenAccent[400],
            },
            neutral: {
              dark: colors.gray[800],
              main: colors.gray[700],
              light: colors.gray[200],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[900],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: "#ababab",
            },
          }),
    },
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Kanit", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Kanit", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Kanit", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Kanit", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Kanit", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Kanit", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
