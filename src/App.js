import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react'
export default class App extends React.Component {
  state = {
    name: 'Quang',
    address: 'Hoi Dan It',
    age: 24
  }
  render () {
    return (
      <div>
        <MyComponent></MyComponent>
      </div>
    )
  }
}

