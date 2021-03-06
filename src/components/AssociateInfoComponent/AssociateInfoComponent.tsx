import React from 'react'
import { FunctionComponent } from "react";
import { Button, makeStyles, Theme, createStyles, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

export const AssociateInfoComponent:FunctionComponent<any> = (props) => {
  const classes = useStyles();
  const [batchQuarter, setBatchQuarter] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setBatchQuarter(event.target.value as string);
  };

  return (
    <div>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Filter by Quarter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={batchQuarter}
          onChange={handleChange}
        >
          <MenuItem value={'2020Q2'}>2020 Q2</MenuItem> {/*Ask backend group about the best way to format quaters: a date? Just 2020Q1 */}
          <MenuItem value={'2020Q1'}>2020 Q1</MenuItem>
          <MenuItem value={'2019Q4'}>2019 Q4</MenuItem>
          <MenuItem value={'2019Q3'}>2019 Q3</MenuItem> {/*Ask backend group about the best way to format quaters: a date? Just 2020Q1 */}
          <MenuItem value={'2019Q2'}>2019 Q2</MenuItem>
          <MenuItem value={'2019Q1'}>2019 Q1</MenuItem>
          <MenuItem value={'2018Q4'}>2018 Q4</MenuItem> {/*Ask backend group about the best way to format quaters: a date? Just 2020Q1 */}
          <MenuItem value={'2018Q3'}>2018 Q3</MenuItem>
          <MenuItem value={'2018Q2'}>2018 Q2</MenuItem>
          <MenuItem value={'2018Q1'}>2018 Q1</MenuItem> {/*Ask backend group about the best way to format quaters: a date? Just 2020Q1 */}
          <MenuItem value={'2017Q4'}>2017 Q4</MenuItem>
          <MenuItem value={'2017Q3'}>2017 Q3</MenuItem>
          <MenuItem value={'2017Q2'}>2017 Q2</MenuItem> {/*Ask backend group about the best way to format quaters: a date? Just 2020Q1 */}
          <MenuItem value={'2017Q1'}>2017 Q1</MenuItem>
          <MenuItem value={'2016Q4'}>2016 Q4</MenuItem>
          <MenuItem value={'2016Q3'}>2016 Q3</MenuItem> {/*Ask backend group about the best way to format quaters: a date? Just 2020Q1 */}
          <MenuItem value={'2016Q2'}>2016 Q2</MenuItem>
          <MenuItem value={'2016Q1'}>2016 Q1</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

// import React from 'react'
// import { FunctionComponent } from "react";
// import { Button } from '@material-ui/core';

// export const AssociateInfoComponent:FunctionComponent = (props) => {
// return(
//     <div>
//         <h1>
//             {/*Associate Info Goes here!!!*/}
//             {/*<Button variant="contained">Default</Button>*/}
//             <Button variant="contained" color="primary">
//              Associate info
//             </Button>
//         </h1>
//     </div>
// )
// }
