import './App.css';
import { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
  makeStyles,
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    paddong: '0 30px',
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Styled Button</Button>;
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
  );
}

export default App;
