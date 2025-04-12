import "./summerSpecialsStyles.css";
import "./style.css";
import {MenuItems, MenuList, NavElement} from './Menu';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ViewBag from './viewBag';
import {useCart} from './contextapi';

const items=[
    {name:"Corn Cheese Seekh", cost:"₹355", description:"This brings together the sweetness of corn and the richness of paneer and cheese. Seasoned with aromatic spices, these kebabs are rolled in breadcrumbs. Each bite is a cheesy, savory delight.", image:"/images/i110.jpg", alt:"i110"},
    {name:"Stuffed Multani Mushroom", cost:"₹375", description:"Dive into the juicy mushrooms, stuffed with a mix of paneer, cheese, and fresh spices, then roasted to perfection with butter and cream. Creamy indulgence meets the perfect balance of spice in every bite.", image:"/images/i111.jpg", alt:"i111"},
    {name:"Lasooni Paneer Tikka", cost:"₹415", description:"Is paneer’s genius in the kitchen! Marinated in a creamy lasooni (garlic) mix and tandoor-grilled to smoky, charred perfection, delivering paneer that’s flavorful enough to satisfy your every craving.", image:"/images/i112.jpg", alt:"i112"},
    {name:"Malai Paneer", cost:"₹455", description:"is the OG of the paneer family. Paneer takes center stage, marinated in curd, cashew, and cheese, then slow-cooked with butter, cream, and a dash of green cardamom. This rich, smooth dish is the ultimate tribute to all things creamy and delicious.", image:"/images/i113.jpg", alt:"i113"},
    {name:"Malai Broccoli", cost:"₹435", description:"is where creamy indulgence meets healthy goodness. Fresh broccoli is coated in a blend of cream, curd, and cheese, gets a sweet boost from cashews, then roasted to perfection. Creamy, dreamy, and irresistibly delicious in every bite.", image:"/images/i114.jpg", alt:"i114"},
];

const Tandoor=()=>{

    const { addToCart, removeFromCart, getItemQuantity } = useCart();
    const navigate=useNavigate();

    return(
        <div>
            <NavElement/>
            <div style={{display:"flex"}}>
            <div className="menu-container mt-1">
            <h3 className="menu-heading" style={{backgroundImage:'url(/images/i115.jpg)'}}>Tandoor</h3>
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

export default Tandoor;
export {items};