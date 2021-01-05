import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { padding: theme.spacing(10) },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    cryptoInputBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    currencyInput: {
      minWidth: "calc(100% - 100px)",
      padding: theme.spacing(1),
    },
    currencyType: { minWidth: "100px", padding: theme.spacing(1) },
    currencyIcon: {
      width: "18px",
      height: "auto"
    }
  })
);

export default useStyles;