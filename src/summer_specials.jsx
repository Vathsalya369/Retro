import "./summerSpecialsStyles.css";
import './style.css';
import {useNavigate} from "react-router-dom";
import {MenuItems, NavElement, MenuList} from './Menu';
import {useState} from "react";
import ViewBag from './viewBag';
import {useCart} from './contextapi';

const items=[
    {name:"Summer Special Beenes'S", cost:"₹255", image:"/images/i13.jpg", alt:"i13"},
    {name:"Summer Cranberry Espresso Fizz", cost:"₹285", image:"/images/i14.jpg", alt:"i14"},
    {name:"Summer Passion Fruit Espresso", cost:"₹285", image:"/images/i15.jpg", alt:"i15"},
    {name:"Summer GrapeFruit Cold Brew Lemonade", cost:"₹285", image:"/images/i16.jpg", alt:"i16"},
    {name:"Summer Cold Brew Lemonade", cost:"₹225", image:"/images/i17.jpg", alt:"i17"},
    {name:"Summer Carribean Cold Brew", cost:"₹285", image:"/images/i18.jpg", alt:"i18"},
    {name:"Summer Passion fruit Iced Tea", cost:"₹255", image:"/images/i19.jpg", alt:"i19"},
    {name:"Summer Blue Berry Iced Tea", cost:"₹255", image:"/images/i20.jpg", alt:"i20"}
];

const SummerSpecials=()=>{
    
    const { addToCart, removeFromCart, getItemQuantity } = useCart();

    const navigate=useNavigate();

    return(
        <div>
            <NavElement/>
            <div style={{display:"flex"}}>
            <div className="menu-container mt-1">
                <h3 className="menu-heading" style={{backgroundImage:'url(/images/i6.jpg)'}}>Summer Specials</h3>
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

export default SummerSpecials;
export {items};