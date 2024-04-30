import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Restaurant from './pages/Restaurant';
import Restaurants from './pages/Restaurants';
import OrdersList from './pages/Orders';

export default function AppRoutes() {
  /* -------------------------- API Calls Interceptor ------------------------- */
  axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Restaurants />} />
          <Route path="/restaurant/:restaurantId" element={<Restaurant />} />
          <Route path="/orders" element={<OrdersList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
