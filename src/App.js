import React, { useState } from "react";
import './App.css'
import PageLayout from "./components/core/ui-components/PageLayout";
import { setLogout } from './store/features/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import axios from './axios'
import { useNavigate } from 'react-router-dom';
import { RoutesContext, RoutesElement } from './routes';
import Login from './views/Login';
import {  createTheme } from '@mui/material/styles';
import {  ThemeProvider }  from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';


const App = () => {
  const [temaSelecionado, setTemaSelecionado] = useState({colors:{
    headerDark:'#000000', header:'#ffffff'
  }});
  const navigate = useNavigate();
const dispatch = useDispatch()
const token = useSelector((state) => state.login.isAuthenticated)
const isAuthenticated = !!token;

axios.interceptors.response.use(response => {

  return response;
}, async error => {
  if (isAuthenticated && error.response.status === 401) {
    await dispatch(setLogout())
    navigate('/login')
  }
  return Promise.reject(error);
});
const getSelectedTheme = (selectedTheme) =>{
  console.log(selectedTheme);
  setTemaSelecionado(selectedTheme);
};

const tema = createTheme({
  palette:{
      primary: {
        main: temaSelecionado.colors.header,
        contrastText: temaSelecionado.colors.header,
      },
  },
});
  return (
    <div>
       {isAuthenticated ? (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={tema}>
          <PageLayout getSelectedTheme={getSelectedTheme}/>
        </ThemeProvider>
      </StyledEngineProvider>
      ) : (
        <Navigate to="/login" />
      )}

      <Routes>
        <Route path="/login" exact element={
          isAuthenticated ? <Navigate to="/" /> : <Login />
        }>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
