import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core/styles";
import { COLOR_INDIGO_700, COLOR_INDIGO_800 } from "../../theme/colors";

export const useStyles = makeStyles(() => {
  return createStyles({
    header: {
      flex: "0 0 auto",
      width: "100%",
      padding: "20px 0",
      display: "grid",
      gridTemplateColumns: "150px 1fr 150px",
    },
    container: {
      maxWidth: "1100px",
      padding: "0 20px",
      width: "100%",
      margin: "0 auto",
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      flexDirection: "column",
      minHeight: "100vh",
    },
    content: {
      flex: "1 0 auto",
      display: "flex",
      alignItems: "center",
    },
    logo: {
      fontFamily: "Pacifico, cursive;",
      fontSize: "28px",
    },
    btnWrapper: {
      justifySelf: "center",
      borderRadius: "16px",
      height: "40px",
      display: "flex",
      background: COLOR_INDIGO_800,
      padding: "2px",
    },
    link: {
      display: "block",
      padding: "8px 12px",
      borderRadius: "14px",
      fontSize: "16px",
      color: "rgb(195, 197, 203)",
      textDecoration: "none",
      transition: ".2s all",
      "&:hover": {
        color: "rgb(230, 230, 230);",
      },
    },
    linkActive: {
      background: COLOR_INDIGO_700,
      color: "rgb(255, 255, 255)",
    },
  });
});
