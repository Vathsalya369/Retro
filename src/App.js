//import {useState} from "react";
import Home from './Home';
import  {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import './style.css';
import Navbar from './navbar';
import SignUp from './signup';
import Login from './login';
import Menu from './Menu';
import Services from './services';
import Contact from './contact';
import ScriptNavbar from './scriptfilenavbar.js';
import SummerSpecials from './summer_specials';
import SeasonalMango from './seasonalMango';
import ClassicCoffee from "./classicCoffee";
import IcedCoffee from "./icedCoffee";
import CoffeeMocktails from "./coffeeMocktails";
import Matcha from './matcha';
import HotChocolate from "./hotChocolate";
import IcedTea from "./icedTea";
import MilkShakes from "./milkShakes";
import Coolers from './coolers';
import FruitJuices from './fruitJuices'
import OpenToasts from "./openToasts";
import SuperBowl from "./superBowls";
import DesiNashta from "./desiNashta";
import Burger from './burger';
import Sandwitch from "./sandwich.jsx";
import Soups from './soups';
import Salads from './salads';
import Tandoor from "./tandoor.jsx";
import SmallPlates from "./smallPlates.jsx";
import LargePlates from "./largePlates.jsx";
import Desserts from "./desserts.jsx";
import Extras from './extras.jsx';
import Forgotpassword from "./forgotPassword.jsx";
import Cart from './cart.jsx';
import Prebooking from './Prebooking.jsx';
import { CartProvider } from './contextapi.jsx';
import LiveEvents from './liveEvents.jsx';
// import Checkout from './takeaway/checkout.jsx';

function App(){

  return (
    <CartProvider>
         <BrowserRouter>
           
              {/* <nav style={{display:"none"}}/>
               <Link to="/Home">Home</Link>|
               <Link to="/Menu">Menu</Link>|
               <Link to="/Services">Services</Link>|
               <Link to="/Contact">Contact</Link>|
               <Link to="/signup">SignUp</Link>|
               <Link to="/login">Login</Link>
             <nav />  */}
              <Navbar/> 
              <Routes> 
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Menu" element={<Menu/>} />
                <Route path="/Services" element={<Services/>} />
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/summer_specials" element={<SummerSpecials/>}/>
                <Route path="/seasonalMango" element={<SeasonalMango/>}/>
                <Route path="/classicCoffee" element={<ClassicCoffee/>}/>
                <Route path="/icedCoffee" element={<IcedCoffee/>}/>
                <Route path="/coffeeMocktails" element={<CoffeeMocktails/>}/>
                <Route path="/Matcha" element={<Matcha/>}/>
                <Route path="/hotChocolate" element={<HotChocolate/>}/>
                <Route path="/icedTea" element={<IcedTea/>}/>
                <Route path="/milkShakes" element={<MilkShakes/>}/>
                <Route path="/coolers" element={<Coolers/>}/>
                <Route path="/fruitJuices" element={<FruitJuices/>}/>
                <Route path="/openToasts" element={<OpenToasts/>}/>
                <Route path="/superBowls" element={<SuperBowl/>}/>
                <Route path="/desiNashta" element={<DesiNashta/>}/>
                <Route path="/burger" element={<Burger/>}/>
                <Route path="/sandwich" element={<Sandwitch/>}/>
                <Route path="/soups" element={<Soups/>}/>
                <Route path="/salads" element={<Salads/>}/>
                <Route path="/tandoor" element={<Tandoor/>}/>
                <Route path="/smallPlates" element={<SmallPlates/>}/>
                <Route path="/largePlates" element={<LargePlates/>}/>
                <Route path="/desserts" element={<Desserts/>}/>
                <Route path="/extras" element={<Extras/>}/>
                <Route path="/forgotPassword" element={<Forgotpassword/>}/> 
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/Prebooking" element={<Prebooking/>}/>
                <Route path="/liveEvents" element={<LiveEvents/>}/>
                {/* <Route path="/takeaway/menu" element={<Menu/>}/>
                <Route path='/checkout' element={<Checkout/>}/>  */}
                {/* <Route path="/takeaway/takeawayForm" element={<TakeawayForm/>}/> */}
            </Routes>
  </BrowserRouter> 
  </CartProvider>

      /* // <div>
      //   <SummerSpecials/>
      //   <SeasonalMango/>
      //   <ClassicCoffee/>
      //   <IcedCoffee/>
      //   <CoffeeMocktails/>
      //   <Matcha/>
      //   <HotChocolate/>
      //   <IcedTea/>
      //   <MilkShakes/>
      //   <Coolers/>
      //   <FruitJuices/>
      //   <OpenToasts/>
      //   <SuperBowl/>
      //   <DesiNashta/>
      //   <Burger/>
      //   <Sandwitch/>
      //   <Soups/>
      //   <Salads/>
      //   <Tandoor/>
      //   <SmallPlates/>
      //   <LargePlates/>
      //   <Desserts/>
      //   <Extras/>
      // </div> */

  )
}



export default App;