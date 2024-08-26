import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { LogingPage } from './LogingPage';
import { AboutPage } from './AboutPage';
import { Navbar } from './Navbar';

export const MainApp = () => {
  return (
    <>
        <h1>MainApp</h1>
        <Navbar />
        <hr />

        <Routes>
          <Route path='/' element={ <HomePage /> }/>
          <Route path='login' element={ <LogingPage /> }/>
          <Route path='about' element={ <AboutPage /> }/>

          <Route path='/*' element={ <Navigate to={ <HomePage /> } /> }/>
        </Routes>
    </>
  )
}
