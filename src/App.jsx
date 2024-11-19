import React from 'react'
import Navbar from './componets/Navbar'
import Product from './componets/Product'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductDetail from './componets/ProductDetail'
import SearchItem from './componets/SearchItem'
import Cart from './componets/Cart'
const App = () => {
  return (
   <>
   <Router>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Product/>}/>
    <Route path="/product/:id" element={<ProductDetail/>}/>
    <Route path="/Search/:term" element={<SearchItem/>}/>
    <Route path="/Cart" element={<Cart/>}/>
   </Routes>
   <Product/>
   </Router>
   </>
  )
}

export default App
