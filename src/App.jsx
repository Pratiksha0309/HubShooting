
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './ScreenComponents/HomePage/HomePage';
import Navbar from './ScreenComponents/Navbar/Navbar';
import Footer from './ScreenComponents/Footer/Footer';
import Productpage from './ScreenComponents/Productpage/Productpage';
import ProductDetailPage from './ScreenComponents/ProductDetailPage/ProductDetailPage';
import CartPage from './ScreenComponents/CartPage/CartPage';
import CheckOutPage from './ScreenComponents/CheckOutPage/CheckOutPage';
import ScrollToTop from './ScreenComponents/CommonComponent/ScrollToTop';
import ThankYouPage from './ScreenComponents/CheckOutPage/ThankYouPage';
function App() {

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/product' element={<Productpage />}></Route>
        <Route path='/productDetail' element={<ProductDetailPage />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
        <Route path='/checkOut' element={<CheckOutPage />}></Route>
        <Route path='/orderPlaced' element={<ThankYouPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
