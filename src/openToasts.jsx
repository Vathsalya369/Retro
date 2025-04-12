import "./summerSpecialsStyles.css";
import "./style.css";
import {MenuItems, MenuList, NavElement} from './Menu';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ViewBag from './viewBag';
import {useCart} from './contextapi';

const items=[
    {name:"Fan-toast-ic Spicy Avo-Rad", cost:"₹355", description:"Avocado & Radish on Toast.", image:"/images/i80.jpg", alt:"i80"},
    {name:"Fan-toast-ic Nutty Date", cost:"₹355", description:"Ricotta, Honey Dates & Silver Almond on Toast.", image:"/images/i81.jpg", alt:"i81"},
    {name:"Fan-toast-ic Classic PB&B", cost:"₹315", description:"Peanut Butter & Banana on Toast.", image:"/images/i82.jpg", alt:"82"},
    {name:"Mango Ricotta Toast", cost:"₹355", description:"", image:"/images/i83.jpg", alt:"i83"},
    {name:"Mango & Avocado Burrata Toast", cost:"₹375", description:"", image:"/images/i84.jpg", alt:"i84"}
];

const OpenToasts=()=>{

     const { addToCart, removeFromCart, getItemQuantity } = useCart();
    const navigate=useNavigate();

    return(
        <div>
            <NavElement/>
            <div style={{display:"flex"}}>
            <div className="menu-container mt-1">
            <h3 className="menu-heading"  style={{backgroundImage:'url(/images/i85.jpg)'}}>Open Toasts</h3>
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

export default OpenToasts;
export {items};