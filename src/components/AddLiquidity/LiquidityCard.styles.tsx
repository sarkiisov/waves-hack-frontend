import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core/styles";
import { COLOR_TRANSPARENT_100 } from "../../theme/colors";

export const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      position: "relative",
      width: "360px",
      maxWidth: "none",
      padding: "40px 16px 20px 16px",
    },
    liquidity: {
      width: "460px",
      minHeight: "320px",
      padding: "40px",
      paddingTop: "24px",
      background: COLOR_TRANSPARENT_100,
      borderRadius: "20px",
      position: "relative",
    },
    head: {
      padding: "8px 12px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    backBtn: {
      position: "absolute",
      left: "12px",
      top: "19px",
    },
    title: {
      marginBottom: "20px",
    },
    firstInput: {
      marginBottom: "16px",
    },
    secondInput: {
      marginBottom: "20px",
    },
    feeWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    btn: {
      width: "100%",
    },
  });
});
