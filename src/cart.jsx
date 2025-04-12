import './style.css';
import { NavElement } from './Menu';
import { useCart } from './contextapi';
import { useState } from 'react';

// Import all menu sources
import { items as summerSpecials } from './summer_specials';
import { items as seasonalMango } from './seasonalMango';
import {items as burgers} from './burger';
import {items as CoffeeMocktails} from './coffeeMocktails';
import {items as coolers} from './coolers';
import {items as desiNashta} from './desiNashta';
import {items as desserts} from './desserts';
import {items as extras} from './extras';
import {items as HotChocolate} from './hotChocolate';
import {items as IcedCoffee} from './icedCoffee';
import {items as IcedTea} from './icedTea';
import {items as largePlates} from './largePlates';
import {items as matcha} from './matcha';
import {items as milkShakes} from './milkShakes';
import {items as openToasts} from './openToasts';
import {items as soups} from './soups';
import {items as fruitJuices} from './fruitJuices';
import { items as classicCoffee } from './classicCoffee';
import { items as salads } from './salads';
import { items as sandwich } from './sandwich';
import { items as smallPlates } from './smallPlates';
import {items as SuperBowls} from './superBowls';
import {items as tandoor} from './tandoor';

const allMenuItems = [
    ...summerSpecials,
    ...seasonalMango,
    ...burgers,
    ...CoffeeMocktails,
    ...coolers,
    ...desiNashta,
    ...desserts,
    ...extras,
    ...HotChocolate,
    ...IcedCoffee,
    ...IcedTea,
    ...largePlates,
    ...matcha,
    ...milkShakes,
    ...openToasts,
    ...soups,
    ...fruitJuices,
    ...classicCoffee,
    ...salads,
    ...sandwich,
    ...smallPlates,
    ...SuperBowls,
    ...tandoor
];

const Cart = () => {
    const { cartItems, removeFromCart, addToCart, clearCart } = useCart();
    const [customerInfo, setCustomerInfo] = useState({
        "Table No": '',
        notes: ''
    });

    const getItemPrice = (itemName) => {
        const item = allMenuItems.find(item => item.name === itemName);
        return item ? parseInt(item.cost.replace('₹', '')) : 250;
    };

    const calculateItemTotal = (itemName, quantity) => getItemPrice(itemName) * quantity;
    const calculateSubtotal = () => Object.entries(cartItems).reduce((sum, [item, qty]) => sum + calculateItemTotal(item, qty), 0);
    const calculateTax = () => Math.round(calculateSubtotal() * 0.05);
    const calculateTotal = () => calculateSubtotal() + calculateTax();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Order submitted successfully!');
        console.log('Order details:', {
            items: cartItems,
            customerInfo,
            total: calculateTotal()
        });
        clearCart();
        setCustomerInfo({ "Table No": '', notes: '' });
    };

    return (
        <div>
            <NavElement />
            <div className="cart-page-container">
                <div className='cart-form-wrapper'>
                <form onSubmit={handleSubmit} className="checkout-form">
                    <h3 className="cart-title">Your Bag</h3>
                    {Object.keys(cartItems).length > 0 && (
                        <p className="cart-subtitle">
                            {Object.values(cartItems).reduce((a, b) => a + b, 0)} items in your bag
                        </p>
                    )}

                    {Object.keys(cartItems).length === 0 ? (
                        <div className="empty-cart-message">
                            <p>Your bag is empty. Add some delicious items!</p>
                        </div>
                    ) : (
                        <>
                            <div className="cart-items-section">
                                <table className="cart-items-table">
                                    <thead>
                                        <tr>
                                            <th className="item-col">Item</th>
                                            <th className="qty-col">Quantity</th>
                                            <th className="price-col">Price</th>
                                            <th className="total-col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.entries(cartItems).map(([itemName, quantity]) => {
                                            const item = allMenuItems.find(i => i.name === itemName);
                                            return (
                                                <tr key={itemName}>
                                                    <td>
                                                        <img 
                                                            src={item?.image || '/images/default.jpg'} 
                                                            alt={itemName} 
                                                            className="cart-item-thumbnail"
                                                        />
                                                        {itemName}
                                                    </td>
                                                    <td>
                                                        <div className="quantity-controls">
                                                            <button type="button" className="quantity-btn" onClick={() => removeFromCart(itemName)}>-</button>
                                                            <span className="quantity-display">{quantity}</span>
                                                            <button type="button" className="quantity-btn" onClick={() => addToCart(itemName)}>+</button>
                                                        </div>
                                                    </td>
                                                    <td className="price-cell">₹{getItemPrice(itemName)}</td>
                                                    <td className="total-cell">₹{calculateItemTotal(itemName, quantity)}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            <div className="order-summary">
                                <h4>Order Summary</h4>
                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>₹{calculateSubtotal()}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Tax (5%)</span>
                                    <span>₹{calculateTax()}</span>
                                </div>
                                <div className="summary-row total-row">
                                    <span>Total</span>
                                    <span>₹{calculateTotal()}</span>
                                </div>
                            </div>
                        </>
                    )}

                    {Object.keys(cartItems).length > 0 && (
                        <div className="customer-info">
                            <h4>Customer Information</h4>
                            <div className="form-group">
                                <label htmlFor="Table No">Table No</label>
                                <input
                                    type="text"
                                    id="Table No"
                                    name="Table No"
                                    value={customerInfo["Table No"]}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="notes">Special Instructions</label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    rows="3"
                                    value={customerInfo.notes}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <button type="submit" className="checkout-button">PLACE ORDER</button>
                        </div>
                    )}
                </form>
                </div>
            </div>
        </div>
    );
};

export default Cart;
