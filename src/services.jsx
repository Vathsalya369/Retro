import {useNavigate} from 'react-router-dom';
import { NavElement } from './Menu';

let Services=()=>{
  const navigate=useNavigate();

    return(
        <div>
           <NavElement/>
            <div className="services">
            <div className="card">
                <img src="images/i2.jpg" className="card-img-top" alt="i2"/>
                <div className="card-body">
                    <h5 className="card-title">Dining</h5>
                    <p className="card-text">Step into a world of vintage charm and savor our delicious menu, from crispy starters to mouthwatering main courses and delightful desserts. Enjoy cozy retro interiors, refreshing beverages, and a warm dining experience. Visit us today for a taste of nostalgia! </p>
                    <div style={{display:"flex",justifyContent:"center", gap:"20px"}}>
                    <a href="#" className="btn btn-primary" onClick={()=>navigate('/Prebooking')}>Dineout</a>
                    <a href="#" className="btn btn-primary" onClick={()=>navigate('/Menu')}>Go to Menu</a>
                    </div>
                </div>
            </div>

            {/* <div className="card">
                <img src="images/i3.jpg" className="card-img-top" alt="i3"/>
                <div className="card-body">
                    <h5 className="card-title">Takeaway and Delivery</h5>
                    <p className="card-text">Enjoy your favorite Retro Café flavors anywhere with our Takeaway & Delivery service!  Get freshly prepared meals, aromatic coffee, and delicious desserts packed with care. Order now and savor the taste of nostalgia at home!</p>
                    <div style={{display:"flex",justifyContent:"center", gap:"20px"}}>
                        <a href="#" className="btn btn-primary" onClick={()=>navigate('/takeaway/menu')}>Takeaway</a>
                        <a href="#" className="btn btn-primary" onClick={()=>navigate('/delivery')}>Delivery</a>
                    </div>
                </div>
            </div> */}

            <div className="card">
                <img src="images/i4.jpg" className="card-img-top" alt="i4"/>
                <div className="card-body">
                    <h5 className="card-title">Live Music and Events</h5>
                    <p className="card-text"> Enjoy soulful performances, open mic nights, and themed evenings in a cozy ambiance. Celebrate special moments with great food, great vibes, and unforgettable memories! </p>
                    <a href="#" className="btn btn-primary" onClick={()=>navigate('/liveEvents')}>Book Now</a>
                </div>
            </div>

            <div className="card">
                <img src="images/i135.jpg" className="card-img-top" alt="i135"/>
                <div className="card-body">
                    <h5 className="card-title">Café Merchandise Corner</h5>
                    <p className="card-text"> The Café Merchandise Corner offers stylish and branded items like mugs, t-shirts, tote bags, and home brewing kits that reflect your café’s vibe. It enhances customer loyalty, adds an extra revenue stream, and lets customers take a piece of the café experience home. </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Services; 