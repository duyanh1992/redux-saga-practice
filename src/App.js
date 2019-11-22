import React from 'react';
import './App.css';
import StylePractice from './components/StylePractice';
import TaskBoard from './containers/TaskBoard';
import { ThemeProvider } from '@material-ui/styles';
import theme from './commons/Theme';
import GlobalLoading from './components/GlobalLoading';

function App() {
  return (
    <ThemeProvider>
      	<TaskBoard />
      	<GlobalLoading />
    </ThemeProvider>
  );
}

export default App;
