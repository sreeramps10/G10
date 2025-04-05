import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import { Container } from '@mui/material';
import { styled } from '@mui/system';

const Root = styled(Container)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

function App() {
  return (
    <Router>
      <Root>
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
      </Root>
    </Router>
  );
}

export default App;
