import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  });
});
