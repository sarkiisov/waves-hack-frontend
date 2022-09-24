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
    pool: {
      width: "460px",
      minHeight: "320px",
      padding: "40px",
      background: COLOR_TRANSPARENT_100,
      borderRadius: "20px",
    },
    head: {
      padding: "8px 12px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "12px",
    },
    title: {
      marginBottom: "12px",
    },
    info: {
      display: "flex",
      flexDirection: "column",
      rowGap: "10px",
    },
    infoItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    poolCard: {},
    infoText: {},
    infoCount: {},
    btnWrapper: {
      marginTop: "16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
});
