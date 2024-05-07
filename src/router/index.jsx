import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { PrivateRoute } from './privIndex'
import { RegisterPage } from '../pages/register'
import { LoginPage } from '../pages/login'
import { Dashboard } from '../pages/Dashboard'
import Home from '../pages/home'
import About from '../pages/about'
import Reporte from '../pages/reporte'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<Home />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='about' element={<About />} />
          <Route path='reporte' element={<Reporte />} />

          <Route
            path='Dashboard'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  )
}
