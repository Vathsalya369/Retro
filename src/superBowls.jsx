import "./summerSpecialsStyles.css";
import "./style.css";
import {MenuItems, MenuList, NavElement} from './Menu';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ViewBag from './viewBag';
import {useCart} from './contextapi';

const items=[
    {name:"Chia Coconut Cuddle Bowl", cost:"₹395", description:"Chia Seeds soaked in creamy Coconut Milk, topped with fresh Kiwi, Blueberries, Orange segments and shredded Coconut.", image:"/images/i86.jpg", alt:"i86"},
    {name:"Wholesome PB&B Smoothie Bowl", cost:"₹375", description:"Peanut Butter & Ripe Banana smoothie base, topped with crunchy Granola, fresh Banana, and Kiwi.", image:"/images/i87.jpg", alt:"i87"},
    {name:"Beet the Odds Bowl", cost:"₹375", description:"Beetroot & Ripe Banana smoothie base, topped with crunchy Granola, Blueberries and Chia Seeds.", image:"/images/i88.jpg", alt:"88"},
    {name:"Tofu Bowl", cost:"₹345", description:"Brown Rice base, topped with crispy Tofu, Carrots, Black Rajma, Green Peas, and Red Cabbage. Drizzled with Sriracha sauce and garnished with fresh Lemon. Fried Egg add-on is optional.", image:"/images/i89.jpg", alt:"i89"},
    {name:"Quinoa Avacado Bowl", cost:"₹345", description:"Quinoa base, topped with fresh Avocado, Carrots, Green Peas and Red Cabbage. Garnished with Pomegranate seeds, Lemon, and a sprinkle of Black Pepper. Fried Egg add-on is optional.", image:"/images/i90.jpg", alt:"i90"},
    {name:"Mango Smoothie Bowl", cost:"₹395", description:"", image:"/images/i91.jpg", alt:"i91"}
];

const SuperBowl=()=>{

    const { addToCart, removeFromCart, getItemQuantity } = useCart();
    const navigate=useNavigate();

    return(
        <div>
            <NavElement/>
            <div style={{display:"flex"}}>
            <div className="menu-container mt-1">
            <h3 className="menu-heading"  style={{backgroundImage:'url(/images/i92.jpg)'}}>Super Bowls</h3>
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

export default SuperBowl;
export {items};