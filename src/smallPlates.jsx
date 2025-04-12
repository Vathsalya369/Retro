import "./summerSpecialsStyles.css";
import "./style.css";
import {MenuItems, MenuList, NavElement} from './Menu';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ViewBag from './viewBag';
import {useCart} from './contextapi';

const items=[
    {name:"Cheese Balls", cost:"₹365", description:"This is the cheese pull moment you've been waiting for, revealing layers of melty mozzarella, sharp cheddar, and rich Parmesan nestled in a crispy, golden crust, all with a herby hint and sriracha mayo that tantalizes the tongue", image:"/images/i116.jpg", alt:"i116"},
    {name:"Kungpao Baby Potato", cost:"₹345", description:"Is a spicy tango of textures and tastes, with baby potatoes taking center stage, twirling in the thrilling kick of Kung Pao, and joined by the nutty crunch of cashews that'll have you reaching for more.", image:"/images/i117.jpg", alt:"i117"},
    {name:"Veggies Lollipop", cost:"₹325", description:"Is a fun-filled feast on a stick, showcasing the goodness of finely chopped fresh veggies, all wrapped up with the excitement of sev for a snack that's simply irresistible.", image:"/images/i118.jpg", alt:"i118"},
    {name:"Jashn-e-Paneer", cost:"₹385", description:"Is a celebration on a plate, with silky paneer and rich, warm spices of the land, complemented by the satisfying crunch of kaju, all enveloped in a creamy, buttery caress, making you crave more, bite after bite.", image:"/images/i119.jpg", alt:"i119"},
    {name:"BarBQ Flower", cost:"₹435", description:"Is your garden's take on the grill, presenting cauliflower at its smoky best, bathed in a subtly sweet barbecue sauce. Each piece sprinkled with aromatic herbs and complemented by a creamy, garlicky mayo that perfectly matches every floret", image:"/images/i120.jpg", alt:"i120"},
    {name:"Cantonese corn salt & pepper", description:"", cost:"₹325", image:"/images/i121.jpg", alt:"i121"},
    {name:"Honey Chilly Crispy Vegetable", cost:"₹325", description:"", image:"/images/i122.jpg", alt:"i122"},
    {name:"KKK: Kamal Kakdi Kutlet", cost:"₹325", description:"", image:"/images/i123.jpg", alt:"i123"},
];

const SmallPlates=()=>{

    const { addToCart, removeFromCart, getItemQuantity } = useCart();
    const navigate=useNavigate();

    return(
        <div>
            <NavElement/>
            <div style={{display:"flex"}}>
            <div className="menu-container mt-1">
            <h3 className="menu-heading" style={{backgroundImage:'url(/images/i124.jpg)'}}>Small Plates</h3>
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

export default SmallPlates;
export {items};