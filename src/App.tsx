import React from 'react';
import './App.css';
import { Button, Loader, Paper, Text, createStyles } from '@mantine/core';
import NewsHandler from './components/newsHandler/NewsHandler';
// refer mantine docs for more components
const useStyles = createStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  textBox: {},
  newsComponent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '1rem',
    backgroundColor: 'white',
    borderRadius: '1rem',
  },
});


function App() {
  return (
    <div className="App">
      <NewsHandler />
    </div>
  );
}

export default App;
