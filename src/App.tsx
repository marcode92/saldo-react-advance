import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Saldo } from './saldo/Saldo';
import { Citta } from './saldo/Citta';

const Stack = createStackNavigator();

function App() {
  return (
    <div>
      <Citta></Citta>
      <Saldo></Saldo>
    </div>
  );
}

export default App;
