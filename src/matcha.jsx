import "./summerSpecialsStyles.css";
import "./style.css";
import {MenuItems, MenuList, NavElement} from './Menu';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ViewBag from './viewBag';
import {useCart} from './contextapi';

const items=[
    {name:"Valencia Orange Matcha", cost:"₹235", image:"/images/i50.jpg", alt:"i50"},
    {name:"Iced Matcha Vanilla Latte", cost:"₹260", image:"/images/i51.jpg", alt:"i51"},
    {name:"Matcha Lavender Tonic", cost:"₹285", image:"/images/i53.jpg", alt:"i53"},
    {name:"Matcha Biscoff Latte", cost:"₹295", image:"/images/i54.jpg", alt:"i54"},
    {name:"Warm Matcha Vanilla Latte", cost:"₹265", image:"/images/i55.jpg", alt:"i55"},
    {name:"Matcha Frappe", cost:"₹325", image:"/images/i56.jpg", alt:"i56"},
    {name:"Seasonal Mango Matcha", cost:"₹325", image:"/images/i57.jpg", alt:"i57"},
    {name:"Mango Matcha", cost:"₹325", image:"/images/i58.jpg", alt:"i58"}
];

const Matcha=()=>{

    const { addToCart, removeFromCart, getItemQuantity } = useCart();
    const navigate=useNavigate();

    return(
        <div>
            <NavElement/>
            <div style={{display:"flex"}}>
            <div className="menu-container mt-1">
            <h3 className="menu-heading"  style={{backgroundImage:'url(/images/i59.jpg)'}}>Matcha</h3>
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

export default Matcha;
export {items};