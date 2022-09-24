import { Theme } from "@material-ui/core";
import { Overrides } from "@material-ui/core/styles/overrides";
import { ComponentsProps } from "@material-ui/core/styles/props";
import { CSSProperties } from "@material-ui/styles/withStyles";
import {
  COLOR_INDIGO_100,
  COLOR_INDIGO_200,
  COLOR_INDIGO_300,
  COLOR_INDIGO_400G,
  COLOR_INDIGO_600,
  COLOR_INDIGO_700,
  COLOR_TRANSPARENT_100,
  COLOR_TRANSPARENT_200,
} from "../colors";
import { FontWeights } from "../Typography/Typography.theme";

export const getMuiButton = (theme: Theme): Overrides["MuiButton"] => {
  const buttonLarge: CSSProperties = {
    borderRadius: "14px",
    padding: "14px 16px",
    fontSize: "16px",
    lineHeight: "23px",
    minHeight: "53px",

    [theme.breakpoints.up("sm")]: {
      minWidth: "164px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  };

  const buttonSmall: CSSProperties = {
    borderRadius: "65px",
    padding: "10px 35px",
    fontSize: "14px",
    lineHeight: "20px",

    [theme.breakpoints.up("sm")]: {
      minWidth: "110px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  };

  const outlined: CSSProperties = {
    backgroundColor: COLOR_TRANSPARENT_100,
    color: COLOR_INDIGO_200,
    border: `1px solid ${COLOR_INDIGO_400G}`,
    "&:hover": {
      backgroundColor: COLOR_INDIGO_400G,
      borderColor: COLOR_INDIGO_400G,
      color: COLOR_INDIGO_700,
    },
  };

  const outlinedPrimary: CSSProperties = {
    backgroundColor: COLOR_TRANSPARENT_100,
    color: COLOR_INDIGO_100,
    border: `1px solid ${COLOR_INDIGO_600}`,

    "& $endIcon svg > *": {
      fill: COLOR_INDIGO_600,
    },
    "&:hover $endIcon svg > *": {
      fill: COLOR_INDIGO_300,
    },
    "&:active $endIcon svg > *": {
      fill: COLOR_INDIGO_600,
    },

    "&:hover": {
      backgroundColor: COLOR_TRANSPARENT_200,
      borderColor: COLOR_INDIGO_300,
      color: COLOR_INDIGO_300,
    },

    "&:active": {
      backgroundColor: COLOR_INDIGO_300,
      fontColor: COLOR_INDIGO_700,
      color: COLOR_INDIGO_600,
    },
  };

  const outlinedSecondary: CSSProperties = {
    backgroundColor: COLOR_TRANSPARENT_200,
    color: COLOR_INDIGO_300,
    border: `1px solid ${COLOR_INDIGO_400G}`,
    "&:hover": {
      backgroundColor: COLOR_INDIGO_300,
      borderColor: COLOR_INDIGO_400G,
      color: COLOR_INDIGO_700,
    },
  };

  const contained: CSSProperties = {
    backgroundColor: COLOR_INDIGO_300,
    color: COLOR_INDIGO_700,
    border: "none",
    "&:hover": {
      backgroundColor: COLOR_INDIGO_400G,
    },
  };

  return {
    root: {
      textAlign: "center",
      transition: "200ms",
      fontWeight: FontWeights.fontWeightMedium,

      "&.toggle-button": {
        width: "110px",
        height: "42px",
        fontSize: "16px",
        color: COLOR_INDIGO_100,
        backgroundColor: "transparent",
        border: "1px solid transparent",
        borderRadius: "65px",
        justifyContent: "left",
        "& svg": {
          transition: "200ms",
        },
        "&.selected": {
          color: COLOR_INDIGO_400G,
          backgroundColor: COLOR_INDIGO_700,
          border: `1px solid ${COLOR_INDIGO_600}`,
          "& svg": {
            transform: "rotate(-180deg)",
          },
        },
        "&:hover": {
          color: COLOR_INDIGO_400G,
          backgroundColor: COLOR_INDIGO_700,
          border: `1px solid ${COLOR_INDIGO_600}`,
        },
        "& svg > *": {
          fill: "currentColor",
        },
      },
    },
    outlined: {
      ...outlined,
    },
    outlinedSizeLarge: {
      ...buttonLarge,
    },
    outlinedPrimary: {
      ...outlinedPrimary,
    },
    outlinedSecondary: {
      ...outlinedSecondary,
    },
    outlinedSizeSmall: {
      ...buttonSmall,
    },
    contained: {
      ...contained,
    },
    containedSizeLarge: {
      ...buttonLarge,
    },
    containedSizeSmall: {
      ...buttonSmall,
    },

    endIcon: {
      marginLeft: "12px",
      marginRight: 0,
    },
  };
};

export const getMuiButtonDefaultProps = (): ComponentsProps["MuiButton"] => ({
  disableElevation: false,
  disableFocusRipple: true,
  disableRipple: true,
  variant: "outlined",
});
