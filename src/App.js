import './App.css';
import { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@material-ui/core';
import {
  makeStyles, ThemeProvider, createMuiTheme,
} from '@material-ui/core/styles';
import {orange, green} from '@material-ui/core/colors';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  btnRoot: {
    background: 'linear-gradient(45deg, #FE688B, #FF8E53)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px',
    margin:  '2em 0',
    fontSize:'1.5em'
  },
});

const theme = createMuiTheme(
  {
    palette:{
      primary:{
        main:green[400]
      },
      secondary:{
        main:orange[400]
      }
    }
  }
)

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.btnRoot}>Styled Button</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      label='Testing Checkbox'
      control={
        <Checkbox
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          imputProps={{ 'aria-lable': 'secondary checkbox' }}
        />
      }
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <header>React Material UI Tutorial</header>
        <ButtonStyled />
        <div>
          <TextField
            variant='filled'
            color='secondary'
            type='email'
            label='Your Email'
            placeholder='you@youremail.com'
            />
        </div>
        <div>
          <CheckboxExample></CheckboxExample>
        </div>
        <ButtonGroup variant='contained' color='primary'>
          <Button
            startIcon={<SaveIcon />}
            onClick={() => alert('saved')}
            size='large'
            >
            Save
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            onClick={() => alert('deleted')}
            size='large'
            >
            Discard
          </Button>
        </ButtonGroup>
      </div>
    </ThemeProvider>
  );
}

export default App;
