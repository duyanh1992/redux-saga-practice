import React from 'react';
import './App.css';
import StylePractice from './components/StylePractice';
import TaskBoard from './containers/TaskBoard/index';
import { ThemeProvider } from '@material-ui/styles';
import theme from './commons/Theme';

function App() {
  return (
    <ThemeProvider>
      	<TaskBoard />
    </ThemeProvider>
  );
}

export default App;
