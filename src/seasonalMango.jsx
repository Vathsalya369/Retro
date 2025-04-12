import "./summerSpecialsStyles.css";
import "./style.css";
import {MenuItems, MenuList, NavElement} from './Menu';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ViewBag from './viewBag';
import {useCart} from './contextapi';

const items=[
    {name:"Seasonal Mango Smoothie Bowl", cost:"₹395", image:"/images/i22.jpg", alt:"i22"},
    {name:"Mango ChickPea salad", cost:"₹375", image:"/images/i23.jpg", alt:"i23"},
    {name:"Mango Quinoa Salad", cost:"₹395", image:"/images/i24.jpg", alt:"i24"},
    {name:"Mango Ricotta Toast", cost:"₹355", image:"/images/i25.jpg", alt:"i25"},
    {name:"Mango & Avacado Buratta Toast", cost:"₹375", image:"/images/i26.jpg", alt:"i26"},
    {name:"Mango Madness", cost:"₹285", image:"/images/i27.jpg", alt:"i27"},
    {name:"Mango Coco Cold Brew", cost:"₹290", image:"/images/i28.jpg", alt:"i28"}
];

const SeasonalMango=()=>{

    const { addToCart, removeFromCart, getItemQuantity } = useCart();

    const navigate=useNavigate();
    

    return(
        <div>
            <NavElement/>
            <div style={{display:"flex"}}>
            <div className="menu-container mt-1">
            <h3 className="menu-heading"  style={{backgroundImage:'url(/images/i21.jpg)'}}>Seasonal Mango Specials</h3>
            {items.map((item,index)=>(
                <div key={index} className="item-container">
                    <div className="item-info">
                        <h4 className="item-name">{item.name}</h4>
                        <p className="item-cost">{item.cost}</p>
                    </div>
                    <div className="item-img-container">
                        <img src={item.image} alt={item.alt} className="item-image"/>
                        {/* <button className="addButton">ADD</button> */}
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

export default SeasonalMango;
export {items};