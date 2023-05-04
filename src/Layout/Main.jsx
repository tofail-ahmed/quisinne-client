import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Header/Footer/Footer';
import './Main.css'

const Main = () => {
      return (
            <div className='body-background'>
                  <Header></Header>
                  <Outlet></Outlet>
                  <Footer></Footer>
            </div>
      );
};

export default Main;