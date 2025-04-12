import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
// import '/scriptfilenavbar.js' 

let Navbar=()=>{
  const navigate=useNavigate();
  const location=useLocation();

  if(location.pathname!=='/'){
    return null;
  }

  // const handleChange=(file)=>{
  //   navigate('./${file}');
  // }
    return(
       
      <div className="bgNav">
        <nav className="navbar navbar-expand-lg navclass">
          <div className="container-fluid" >
            <Link to='/' className="navbar-brand"style={{color:"#FFFCEF",fontWeight:"bold",fontFamily:"chiller",fontSize:'35px'}}>RETRO</Link>
            {/* <a className="navbar-brand" href="/Home" style={{color:"#FFFCEF",fontWeight:"bold",fontFamily:"chiller",fontSize:'35px'}} >RETRO</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="d-flex flex-column flex-lg-row w-100 justify-content-between">
              <ul className="navbar-nav flex-column flex-lg-row" id="navLinks">
                <li className="nav-item"><Link to="/Home" className="nav-link" style={{color:"#FFFCEF"}}>Home</Link></li>
                <li className="nav-item"><Link to="/Menu" className="nav-link" style={{color:"#FFFCEF"}} >Menu</Link></li>
                <li className="nav-item"><Link to="/services" className="nav-link" style={{color:"#FFFCEF"}}>Services</Link></li>
                <li className="nav-item"><Link to="/Contact" className="nav-link" style={{color:"#FFFCEF"}}>Contact</Link></li>
              </ul>
              <ul className="navbar-nav flex-column flex-lg-row ">
                <li className="nav-item "><Link to="/signup" className="nav-link" style={{color:"#FFFCEF"}}>SignUp</Link></li>
                <li className="nav-item"><Link to="/login" className="nav-link" style={{color:"#FFFCEF"}}>Login</Link></li>
              </ul>
              </div>
            </div>
          </div>
        </nav>
        {/* <img src="/images/i1.jpg" alt="Retro Theme" style={{ width: "100%", height: "600px" }} /> */}

      </div>


    )
}

export default Navbar;




/*function navbar(){
  return(
      <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
              <a className="navbar-brand" href="#">Namatha IT Solutions</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item"><a className="nav-link" href="/home">Home</a></li>
                      <li className="nav-item"><a className="nav-link" href="/About">Products</a></li>
                      <li className="nav-item"><a className="nav-link" href="/home">Contact</a></li>
                  </ul>
              </div>
          </div>
      </nav>

      </div>
  )
}
export default navbar;*/