import "./summerSpecialsStyles.css";
import "./summerSpecialsStyles.css";
import {MenuItems, MenuList, NavElement} from './Menu';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ViewBag from './viewBag';
import {useCart} from './contextapi';

const items=[
    {name:"Iced Latte", cost:"₹235", image:"/images/i38.jpg", alt:"i38"},
    {name:"Iced Espresso", cost:"₹180", image:"/images/i39.jpg", alt:"i39"},
    {name:"Iced Americano", cost:"₹190", image:"/images/i40.jpg", alt:"i40"},
    {name:"Iced Mocha", cost:"₹275", image:"/images/i41.jpg", alt:"i41"},
    {name:"Iced Cappuccino", cost:"₹225", image:"/images/i42.jpg", alt:"i42"},
    {name:"Iced Spanish Latte", cost:"₹275", image:"/images/i43.jpg", alt:"i43"}
];

const IcedCoffee=()=>{

    const { addToCart, removeFromCart, getItemQuantity } = useCart();
    const navigate=useNavigate();

    return(
        <div>
            <NavElement/>
            <div style={{display:"flex"}}>
            <div className="menu-container mt-3">
            <h3 className="menu-heading"  style={{backgroundImage:'url(/images/i44.jpg)'}}>Iced Coffees</h3>
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

export default IcedCoffee;
export {items};