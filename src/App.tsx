import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { TCoin } from './types';
import axios from 'axios';
import { useState, useEffect } from "react";
import CryptoTable from "./components/CryptoTable";
import ConverterBlock from "./components/ConverterBlock";
import useStyles from "./styles";

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
            <CryptoTable items={coins} classes={classes} />
          </Grid>
          <Grid item xs={4}>
            <ConverterBlock classes={classes} />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
export default App;
