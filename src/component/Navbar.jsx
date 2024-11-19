import React from 'react'

const Navbar = () => {
  return (
   <>
   <header>
    <div className="nav-bar">
        <div className="brand">E-commerce</div>
        <div className="search-bar">
            <input type="text"placeholder='Search Product'/>
        </div>
        <div className="cart">Cart</div>
    </div>
    <div className="nav-bar-wrapper">
    <div className="item">Filter by{"->"}</div>
    <div className="item">No Filter</div>
    <div className="item">Mobiles</div>
    <div className="item">Laptops</div>
    <div className="item">Tablets</div>
    <div className="item">{">="}29999</div>
    <div className="item">{">="}49999</div>
    <div className="item">{">="}69999</div>
    <div className="item">{">="}89999</div>
    </div>
   </header>
   </>
  )
}

export default Navbar
