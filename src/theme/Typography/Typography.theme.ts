import { TypographyOptions } from "@material-ui/core/styles/createTypography";

export enum FontWeights {
  fontWeightRegular = 400,
  fontWeightMedium = 500,
  fontWeightSemiBold = 600,
  fontWeightBold = 700,
}

export const getTypographyOptions = (): TypographyOptions => ({
  fontFamily: '"Inter", sans-serif',

  h2: {
    fontSize: "32px;",
    fontWeight: FontWeights.fontWeightMedium,
    lineHeight: "24px",
  },
  h3: {
    fontSize: "20px",
    fontWeight: FontWeights.fontWeightSemiBold,
    lineHeight: "30px",
  },
  h6: {
    fontSize: "18px",
    fontWeight: FontWeights.fontWeightSemiBold,
    lineHeight: "18px",
  },
  button: {
    textTransform: "none",
    lineHeight: "24px",

    "&.l": {
      fontSize: "18px",
      fontWeight: FontWeights.fontWeightMedium,
    },
    "&.m": {
      fontSize: "14px",
      fontWeight: FontWeights.fontWeightSemiBold,
    },
    "&.s": {
      fontSize: "12px",
      fontWeight: FontWeights.fontWeightSemiBold,
    },
  },
  body1: {
    "&.l": {
      fontSize: "18px",
      lineHeight: "30px",
      fontWeight: FontWeights.fontWeightMedium,
      letterSpacing: "-0.5px",
    },
    "&.m": {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: FontWeights.fontWeightMedium,
    },

    "&.s": {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: FontWeights.fontWeightMedium,
      letterSpacing: "-0.5px",
    },
  },
  caption: {
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: FontWeights.fontWeightRegular,
  },
});
