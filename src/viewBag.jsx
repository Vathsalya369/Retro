import {useNavigate} from 'react-router-dom';
import {useCart} from './contextapi';
import './style.css';

const ViewBag=()=>{
    const navigate=useNavigate();
    const { getTotalItems, hasItems } = useCart();

    const handleViewBag=()=>{
        navigate('/cart');
    }

    return(
        <>
        {hasItems() && (
                <div className="bottom-nav">
                    <div className="cart-summary">
                        <span>{getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}</span>
                    </div>
                    <button className="view-bag-button" onClick={handleViewBag}>VIEW BAG</button>
                </div>
            )}
        </>
    )
}

export default ViewBag;