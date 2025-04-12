import "./summerSpecialsStyles.css";
import './style.css';
import {useNavigate} from "react-router-dom";
import {MenuItems, MenuList, NavElement} from './Menu';
import {useState} from "react";
import ViewBag from './viewBag';
import {useCart} from './contextapi';

const items=[
    {name:"Crispy Fried Vegetable Burger", cost:"₹415", image:"/images/i96.jpg", alt:"i93"},
    {name:"French Fries", cost:"₹295", image:"/images/i97.jpg", alt:"i94"}
];

const Burger=()=>{

    const { addToCart, removeFromCart, getItemQuantity } = useCart();
    const navigate=useNavigate();

    return(
        <div>
            <NavElement/>
            <div style={{display:"flex"}}>
                <div className="menu-container mt-3">
                    <h3 className="menu-heading"  style={{backgroundImage:'url(/images/i98.jpg)'}}>Burgers</h3>
                        {items.map((item,index)=>(
                    <div key={index} className="item-container">
                        <div className="item-info">
                            <h4 className="item-name">{item.name}</h4>
                            <p className="item-cost">{item.cost}</p>
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

export default Burger;
export {items};