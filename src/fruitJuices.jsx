import "./summerSpecialsStyles.css";
import './style.css';
import {useNavigate} from "react-router-dom";
import {MenuItems, NavElement, MenuList} from './Menu';
import {useState} from "react";
import ViewBag from './viewBag';
import {useCart} from './contextapi';

const items=[
    {name:"ABC", cost:"₹315", description:"Apple, Beetroot and Carrot.", image:"/images/i75.jpg", alt:"i75"},
    {name:"Go-To Watermelon", cost:"₹255", description:"Watermelon and Mint.", image:"/images/i76.jpg", alt:"i76"},
    {name:"Simply Orange!", cost:"₹315", description:"Just Oranges.", image:"/images/i77.jpg", alt:"i77"},
    {name:"Pineapple Zing", cost:"₹285", description:"Pineapple, Carrot and Ginger.", image:"/images/i78.jpg", alt:"i78"}
];

const FruitJuices=()=>{

    const { addToCart, removeFromCart, getItemQuantity } = useCart();
    const navigate=useNavigate();

    return(
        <div>
            <NavElement />
            <div style={{display:"flex"}}>
                <MenuList />
            <div className="menu-container mt-3" style={{maxWidth:"500px"}}>
            <h3 className="menu-heading"  style={{backgroundImage:'url(/images/i79.jpg)'}}>Fruit Juices</h3>
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
        {/* <MenuList isMenuItemsOpen={isMenuItemsOpen} closeMenu={closeMenu}/> */}
            </div>
            <ViewBag />
        </div>
    );
};

export default FruitJuices;
export {items};