import "./summerSpecialsStyles.css";
import "./style.css";
import {MenuItems, MenuList, NavElement} from './Menu';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ViewBag from './viewBag';
import {useCart} from './contextapi';

const items=[
    {name:"Tropical Pumpkin Harmony", cost:"₹325", description:"It’s simply a warm hug in a bowl. You’ve got the sun-ripened pumpkin and tropical coconut, all mingled up with a sprinkle of spices that'll make you go ‘mmm’. Simple, soothing, and straight-up delicious.", image:"/images/i101.jpg", alt:"i101"},
    {name:"3 Shrooms", cost:"₹375", description:"This is your ticket to a forest feast, where button, shiitake, and porcini mushrooms mingle in a broth with a hint of truffle, a swirl of cream, and the perfect seasoning.", image:"/images/i102.jpg", alt:"i102"},
    {name:"Malaysian Laska", cost:"₹345", description:"", image:"/images/i103.jpg", alt:"i103"},
    {name:"Clean Lemon Grass", cost:"₹315", description:"", image:"/images/i104.jpg", alt:"i104"}
];

const Soups=()=>{

    const { addToCart, removeFromCart, getItemQuantity } = useCart();
    const navigate=useNavigate();

    return(
        <div>
            <NavElement/>
            <div style={{display:"flex"}}>
            <div className="menu-container mt-1">
            <h3 className="menu-heading" style={{backgroundImage:'url(/images/i105.jpg)'}}>Soups</h3>
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

export default Soups;
export {items};