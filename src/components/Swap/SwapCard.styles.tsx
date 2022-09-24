import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      position: "relative",
      width: "360px",
      maxWidth: "none",
      padding: "40px 16px 20px 16px",
    },
    swap: {
      width: "460px",
      minHeight: "320px",
      padding: "8px",
      background: "rgb(25, 27, 31)",
      borderRadius: "20px",
    },
    head: {
      padding: "8px 12px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
});
