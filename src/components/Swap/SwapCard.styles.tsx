import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core/styles";
import { COLOR_INDIGO_600, COLOR_TRANSPARENT_100 } from "../../theme/colors";

export const useStyles = makeStyles(() => {
  return createStyles({
    swap: {
      width: "460px",
      minHeight: "320px",
      padding: "16px 16px 24px",
      background: COLOR_TRANSPARENT_100,
      borderRadius: "20px",
      backdropFilter: "blur(8px)",
      border: `1px solid ${COLOR_INDIGO_600}`,
    },
    head: {
      padding: "8px 12px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    inputWrapper: {
      display: "flex",
      flexDirection: "column",
      rowGap: "8px",
      marginBottom: "24px",
    },
    switchBtn: {
      margin: "0 30px 0 auto",
      border: `1px solid ${COLOR_INDIGO_600}`,
      "& > .MuiIconButton-label": {
        transform: "rotate(90deg)",
      },
    },
    btnChange: {
      width: "100%",
    },
    iconBtnWrapper: {
      display: "flex",
      justifyContent: "space-between",
    },
    balance: {},
  });
});
