import './style.css';
import "./summerSpecialsStyles.css";
import {MenuItems, MenuList, NavElement} from './Menu';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ViewBag from './viewBag';
import {useCart} from './contextapi';

const items=[
    {name:"Cappuccino", cost:"₹225", description:"Espresso: Double Shot, milk: 150ml", image:"/images/i29.jpg", alt:"i29"},
    {name:"Espresso", cost:"₹180", description:"Double Shot: 40ml", image:"/images/i30.jpg", alt:"i30"},
    {name:"Americano", cost:"₹190", description:"Espresso: Double Shot, water", image:"/images/i31.jpg", alt:"i31"},
    {name:"Cortado", cost:"₹215", description:"Espresso: Double Shot, milk: 40ml", image:"/images/i32.jpg", alt:"i32"},
    {name:"Latte", cost:"₹235", description:"Espresso: Double Shot, milk: 150ml", image:"/images/i33.jpg", alt:"i33"},
    {name:"Mocha", cost:"₹275", description:"Espresso: Double Shot, milk: 150ml, chocolate", image:"/images/i34.jpg", alt:"i34"},
    {name:"Spanish Latte", cost:"₹275", description:"", image:"/images/i35.jpg", alt:"i35"},
    {name:"Rose Latte", cost:"₹275", description:"", image:"/images/i37.jpg", alt:"i37"}
];

const ClassicCoffee=()=>{

    const { addToCart, removeFromCart, getItemQuantity } = useCart();
    const navigate=useNavigate();

    return(
        <div>
            <NavElement/>
            <div style={{display:"flex"}}>
            <div className="menu-container mt-3">
               <h3 className="menu-heading"  style={{backgroundImage:'url(/images/i36.jpg)'}}>Classic Coffees</h3>
               {items.map((item,index)=>(
                <div key={index} className="item-container">
                    <div className="item-info">
                        <h4 className="item-name">{item.name}</h4>
                        <p className="item-cost">{item.cost}</p>
                        <p className="item-description">{item.description}</p>
                    </div>
                    <div className="item-img-container">
                        <img src={item.image} alt={item.alt} className="item-image"/>
                        <div style={{display:"flex",flexDirection:"row"}}>
                        {getItemQuantity(item.name) > 0 ? (
                            <>
                                <button className="button-" onClick={() => removeFromCart(item.name)}>-</button>
                                <div className="quantity-display">{getItemQuantity(item.name)}</div>
                                <button className="button-" onClick={() => addToCart(item.name)}>+</button>
                            </>
                            ) : (
                                <button className="addButton" onClick={() => addToCart(item.name)}>ADD</button>
                        )}
                        </div>
                    </div>
                    </div>
            ))}
        </div>
            <MenuList/>
        </div>
        <ViewBag />
        </div>
        
    );
};

export default ClassicCoffee;
export {items};