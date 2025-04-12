import "./summerSpecialsStyles.css";
import "./style.css";
import {MenuItems, MenuList, NavElement} from './Menu';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ViewBag from './viewBag';
import {useCart} from './contextapi';

const items=[
    {name:"Vegetable Oyster Chilli", cost:"₹425", image:"/images/i125.jpg", alt:"i125"},
    {name:"Green Chinese vegetables", cost:"₹425", image:"/images/i126.jpg", alt:"i126"},
    {name:"Singapori Noodles", cost:"₹395", image:"/images/i127.jpg", alt:"i127"},
    {name:"Thail Chilli Basil Fried Rice", cost:"₹415", image:"/images/i128.jpg", alt:"i128"}
];

const LargePlates=()=>{

    const { addToCart, removeFromCart, getItemQuantity } = useCart();
    const navigate=useNavigate();

    return(
        <div>
            <NavElement/>
            <div style={{display:"flex"}}>
            <div className="menu-container mt-1">
            <h3 className="menu-heading" style={{backgroundImage:'url(/images/i129.jpg)'}}>Large Plates</h3>
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

export default LargePlates;
export {items};