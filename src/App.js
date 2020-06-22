import React, { Component } from 'react';
import Menu from '../src/component/menu';
import About from '../src/component/about';
import Contact from '../src/component/contact';
import logo from '../src/images/logo.jpg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Menu/>
        
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>

        
      </div>
      </BrowserRouter>
    );
  }
}
const Home = () =>
{
        return(


            <div>
                 <div className="home1">
                <h1>home page</h1>
                </div>
            </div>
        )

}
