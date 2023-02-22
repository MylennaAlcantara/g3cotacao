import React, { useState } from 'react';
import Login from '../login/Login';
import {Route, Routes, BrowserRouter,} from "react-router-dom";
import './App.css';
import Products from '../products-table/ProductsTable.js';
import { ProtectedRoute } from '../protected-route/ProtectedRoute';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Home from '../home/Home';


const App = () => {

    const [usuariorecebido, setReceberUsuario] = useState('');

    const [idLoja, setIdloja] = useState('');

    console.log('aqui esta o usuario no app:'+ idLoja);
    return (       
      <Provider store={store}>
        <header className="app-header">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login setReceberUsuario={setReceberUsuario} setIdloja={setIdloja}/>} />
                <Route path="/home" element={<ProtectedRoute><Home usuario={usuariorecebido}/></ProtectedRoute>}/>
                <Route path="/table" element={<ProtectedRoute><Products usuario={usuariorecebido} idDaLoja={idLoja}/></ProtectedRoute>} />
            </Routes>
          </BrowserRouter>
        </header>
      </Provider>
    );
  }
  export default App;