import './App.css';
import { Button, ButtonGroup } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

function App() {
  return (
    <div className='App'>
      <header>React Material UI Tutorial</header>
      <ButtonGroup 
        variant='contained'
        color='primary'
        >
        <Button
          startIcon={<SaveIcon />}
          onClick={() => alert('hello')}
          size='large'
          >
          Save
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          onClick={() => alert('hello')}
          size='large'
          >
          Discard
        </Button>
      </ButtonGroup>

    </div>
  );
}

export default App;
