import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Reservations from './pages/Reservations';
import GiftBuilder from './pages/GiftBuilder';
import About from './pages/About';
import Contact from './pages/Contact';
import Offers from './pages/Offers';
import Account from './pages/Account';
import Cart from './pages/Cart';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/gifts" element={<GiftBuilder />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
