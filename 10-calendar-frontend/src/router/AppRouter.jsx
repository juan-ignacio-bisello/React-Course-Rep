
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPages } from '../auth';
import { CalendarPage } from '../calendar';

export const AppRouter = () => {

    const authStatus = 'authenticated';     //not-authenticated     authenticated

  return (
    <Routes>
        {
            ( authStatus === 'not-authenticated' )  
            ? <Route path="/auth/*" element={ <LoginPages /> } />
            : <Route path="/*" element={ <CalendarPage /> } />
        }
        <Route path="/*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
