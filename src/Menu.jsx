import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
// import '/scriptfilenavbar.js' 

const MenuItems=[
  {name:"Summer Specials", href:"/summer_specials"},
  {name:"Seasonal Mango", href:"/seasonalMango"},
  {name:"Classic Coffees", href:"/classicCoffee"},
  {name:"Coffee Mocktails", href:"/coffeeMocktails"},
  {name:"Iced Coffee", href:"/icedCoffee"},
  {name:"Matcha", href:"/matcha"},
  {name:"Hot Chocolate", href:"/hotChocolate"},
  {name:"Iced Tea", href:"/icedTea"},
  {name:"Milk Shakes", href:"/milkShakes"},
  {name:"Coolers", href:"/coolers"},
  {name:"Fruit Juices", href:"/fruitJuices"},
  {name:"Open Toasts", href:"/openToasts"},
  {name:"Super Bowls", href:"/superBowls"},
  {name:"Desi Nashta", href:"/desiNashta"},
  {name:"Burgers", href:"/burger"},
  {name:"Sandwiches", href:"/sandwich"},
  {name:"Soups", href:"/soups"},
  {name:"Salads", href:"/salads"},
  {name:"Tandoor", href:"/tandoor"},
  {name:"Small Plates", href:"/smallPlates"},
  {name:"Large Plates", href:"/largePlates"},
  {name:"Desserts", href:"/desserts"},
  {name:"Extras", href:"/extras"}

];

const NavElement=()=>{
  return(
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid" >
          <a className="navbar-brand" href="/Home" style={{color:"#FFFCEF",fontWeight:"bold",fontFamily:"chiller",fontSize:'35px'}} >RETRO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="d-flex flex-column flex-lg-row w-100 justify-content-between">
              <ul className="navbar-nav flex-column flex-lg-row" id="navLinks">
                <li className="nav-item"><a className="nav-link" href="/Home" style={{color:"#FFFCEF"}}>Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/Menu" style={{color:"#FFFCEF"}}>Menu</a></li>
                <li className="nav-item"><a className="nav-link" href="/services" style={{color:"#FFFCEF"}}>Services</a></li>
                <li className="nav-item"><a className="nav-link" href="/Contact" style={{color:"#FFFCEF"}}>Contact</a></li>
              </ul>
              <ul className="navbar-nav flex-column flex-lg-row ">
                <li className="nav-item "><a className="nav-link" href="/signup" style={{color:"#FFFCEF"}}>SignUp</a></li>
                <li className="nav-item"><a className="nav-link" href="/login" style={{color:"#FFFCEF"}}>Login</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

const MenuList=()=>{

  const [sidebarOpen, setSidebarOpen]=useState(false);

  const toggleSidebar=()=>{
  setSidebarOpen(!sidebarOpen);
}

  const navigate=useNavigate();

  return(
    <div className="sidebar" style={{marginTop:"2px"}}>
      <h1 className="menu-heading1">ExploreMenu</h1>
      <ul className="list-group">
        {MenuItems.map((item,index)=>(
          <li key={index} className="list-group-item" onClick={()=>{navigate(item.href);toggleSidebar()}} style={{cursor:"pointer"}}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

const Menu=()=>{

    return(
          <div>
            <NavElement />
            <MenuList />
          </div>
    );
};

export default Menu;
export {MenuItems, NavElement, MenuList};
