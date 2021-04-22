import './App.css';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className='App'>
      <header>React Material UI Tutorial</header>
      <Button
        variant='contained'
        color='primary'
        onClick={() => alert('hello')}
        size='large'
      >
        Hello world
      </Button>
    </div>
  );
}

export default App;
