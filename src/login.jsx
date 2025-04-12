import {NavElement} from "./Menu";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ForgotPassword from "./forgotPassword";

let Login=()=>{

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [showPassword, setShowPassword]=useState(false);
  const [errors, setErrors]=useState("");

  const navigate=useNavigate();

  const checkStorage = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("Stored users:", users);
  };

  const handleLogin=(e)=>{

    e.preventDefault();

    console.log("Attempting login with:", { 
      enteredEmail: email.trim(),
      enteredPassword: password 
    });
    
    const users=JSON.parse(localStorage.getItem("users"))||[];

    const user = users.find(u => u.email.toLowerCase().trim() === email.toLowerCase().trim());
    
    if(user){
      if (user.password === password) {
        const loggedInUser = {
          name: user.name,
          email: user.email,
          isLoggedIn: true
        };
      
        localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
        console.log("Login successful:", loggedInUser);

        navigate("/Home");
      } 
      else {
        console.log("Incorrect password");
        setErrors("Invalid email or password");
      }
    }
    else{
      console.log("Email not registered");
      setErrors("Invalid email or password");
    }
    
};

    return(
        <div>
        <NavElement/>
            <div className="body">
            <form className="form" id="loginForm" onSubmit={handleLogin}>
              <h3 className="heading" style={{color:"#FFFCEF"}}>Login</h3>
              {errors && <div style={{color:"red", marginBottom:"10px"}}>{errors}</div>}

              <input type="email" id="email" placeholder="email" required autoComplete="email" value={email} onChange={(e)=>setEmail(e.target.value)} style={{marginBottom:"10px"}}/><br/>
              
              <input type={showPassword?"text":"password"} id="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} required autoComplete="new-password" style={{marginBottom:"10px"}}/><br/>

              <div className="checkbox-container">
                <input type="checkbox" id="showPassword" checked={showPassword} onChange={()=>setShowPassword(!showPassword)} />
                <label htmlFor="showPassword" style={{color:"#FFFCEF"}}>Show Password</label>
              </div>

              <button type="submit">Login</button>

              <p><a style={{color:"#FFFCEF"}} onClick={()=>navigate("/forgotPassword")}>Forget Password?</a> </p>

              <p style={{color:"#FFFCEF"}}>Don't have an account?<a onClick={()=>navigate("/signup")} style={{color:"#FFFCEF", cursor:"pointer" ,marginLeft:"5px"}}>Register here</a></p>

              {/* <button 
            type="button" 
            onClick={checkStorage} 
            style={{marginTop: "10px", background: "#555"}}
          >
            Debug: Check Storage
          </button> */}

            </form>

        </div>
        </div>
    )
}

export default Login;