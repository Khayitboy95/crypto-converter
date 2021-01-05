import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import axios from 'axios';
import { useState, useEffect } from "react";
import { type } from "os";
import CryptoTable from "./components/CryptoTable";
import ConverterBlock from "./components/ConverterBlock";

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
  })
);

type TCoin = {
  name: string;
  fullName: string;
  imageUrl: string;
  price: number;
  volume24Hour: number;
}


function App() {

  const [coins, setCoins] = useState<TCoin[]>([]);

  useEffect(() => {
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD').then(({data}) => {
      const coins : TCoin[] = data.Data.map((coin: any) => {
        const obj : TCoin = {
          name: coin.CoinInfo.Name,
          fullName: coin.CoinInfo.FullName,
          imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
          price: coin.RAW.USD.PRICE.toFixed(3),
          volume24Hour: coin.RAW.USD.VOLUME24HOUR.toFixed(3)
        }
        return obj;
      })
      setCoins(coins);
    });
  }, []);

  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <div className="App">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <CryptoTable coins={coins} />
          </Grid>
          <Grid item xs={4}>
            <ConverterBlock />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
export default App;
