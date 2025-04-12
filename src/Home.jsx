// import '/scriptfilenavbar.js' 

let Home=()=>{
    return(
       
      <div>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid" >
            <a className="navbar-brand" href="/Home" style={{color:"#FFFCEF",fontWeight:"bold",fontFamily:"chiller",fontSize:'35px'}} >RETRO</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="d-flex flex-column flex-lg-row w-100 justify-content-between">
              <ul className="navbar-nav flex-column flex-lg-row" id="navLinks">
                <li className="nav-item"><a className="nav-link" href="/Home" style={{color:"#FFFCEF"}}>Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/Menu" style={{color:"#FFFCEF"}}>Menu</a></li>
                <li className="nav-item"><a className="nav-link" href="/services" style={{color:"#FFFCEF"}}>Services</a></li>
                <li className="nav-item"><a className="nav-link" href="/Contact" style={{color:"#FFFCEF"}}>Contact</a></li>
              </ul>
              <ul className="navbar-nav flex-column flex-lg-row ">
                <li className="nav-item "><a className="nav-link" href="/signup" style={{color:"#FFFCEF"}}>SignUp</a></li>
                <li className="nav-item"><a className="nav-link" href="/login" style={{color:"#FFFCEF"}}>Login</a></li>
              </ul>
              </div>
            </div>
          </div>
        </nav>
        <img src="/images/i1.jpg" alt="Retro Theme" style={{ width: "100%", height: "600px" }} />

      </div>


    )
}

export default Home;




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
