import React from 'react';
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";


interface IConverterBlock {
  classes: any;
}

const ConverterBlock : React.FC<IConverterBlock> = ({classes}) => {
    return (
        <Paper className={classes.paper}>
              <div className={classes.cryptoInputBox}>
                <FormControl className={classes.currencyInput}>
                  <TextField fullWidth label="Сумма" />
                </FormControl>
                <FormControl className={classes.currencyType}>
                  <InputLabel id="demo-simple-select-label">
                    Валюта
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={10}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={classes.cryptoInputBox}>
                <FormControl className={classes.currencyInput}>
                  <TextField fullWidth label="Сумма" />
                </FormControl>
                <FormControl className={classes.currencyType}>
                  <InputLabel id="demo-simple-select-label">
                    Валюта
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={10}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Paper>
    )
}
export default ConverterBlock;