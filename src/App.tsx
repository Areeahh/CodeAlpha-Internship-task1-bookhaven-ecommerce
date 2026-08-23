import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/page';
import Footer from './components/Footer/page';
import Home from './pages/Home/page';
import Login from './pages/Login/page';
import Signup from './pages/Signup/page';
import Dashboard from './pages/Dashboard/page';
import Services from './pages/Services/page';
import Contact from './pages/Contact/page';
import Shop from './pages/Shop/page';
import Cart from './pages/Cart/page';
import Reviews from './pages/Reviews/page';
import Profile from './pages/Profile/page';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    <Footer />
  </>
);

export default App;