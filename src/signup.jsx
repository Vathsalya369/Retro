import { NavElement } from "./Menu";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

let SignUp=()=>{

  const [email, setEmail]=useState("");
  const [name, setName]=useState("");
  const [password, setPassword]=useState("");
  const [showPassword, setShowPassword]=useState(false);
  const [passwordStrength, setPasswordStrength]=useState(0);
  const [errors, setErrors]=useState({});

  const navigate=useNavigate();

  const [users, setUsers]=useState([]);

    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response)=>setUsers(response.data))
      .catch((error)=>console.error("Error fetcing data: ",error))
    },[]);

    useEffect(()=>{
      if(!password){
        setPasswordStrength(0);
        return;
      }
      let strength = 0;
      if (password.length >= 8) strength += 1;
      if (/[A-Z]/.test(password)) strength += 1;
      if (/[0-9]/.test(password)) strength += 1;
      if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
      setPasswordStrength(strength);
  }, [password]);

  const validateForm=()=>{
    const newErrors={};

    if(!name) newErrors.name="Name is required";

    if(!email){
      newErrors.email="Email is required";
    }
    else if(!/\S+@\S+\.\S+/.test(email)){
      newErrors.email="Email is invalid";
    }

    if(!password){
      newErrors.password="Password is required";
    }
    else if(password.length<6){
      newErrors.password="Password must be atleast 6 characters"
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length===0;
  };

  const handleSubmit=(e)=>{

    //localStorage.clear();

    e.preventDefault();

    if(validateForm()){
      const UserData={
        name:name.trim(),
        email:email.trim(),
        password:password
      };

      console.log("Saving user data",UserData);

      const existingUsers=JSON.parse(localStorage.getItem("users"))||[];

      const emailExists = existingUsers.some(user => user.email === UserData.email);
      if (emailExists) {
        setErrors({ email: "Email already registered" });
        return;
      }

      existingUsers.push(UserData);

      localStorage.setItem("users", JSON.stringify(existingUsers));

      console.log("All users after registration:", JSON.parse(localStorage.getItem("users")));

      alert("Registration Successful! Please log in.");
      navigate("/login");


    }
  }
  


    return(
        <div>
            <NavElement/>
            <div className="body">
            <form onSubmit={handleSubmit}>
                <h2 className="heading" style={{color:"#FFFCEF"}}>Registration Form</h2>

                <input type="text" id="name" placeholder="Full Name" onChange={(e)=>setName(e.target.value)} required style={{marginBottom:"10px"}}/>
                {errors.name && <span className="error" style={{color:"red"}}>{errors.name}</span>}

                <input type="email" id="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required style={{marginBottom:"10px"}}/>
                {errors.email && <span className="error" style={{color:"red"}}>{errors.email}</span>}

                <input type={showPassword?"text":"password"} id="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{marginBottom:"10px"}}/>
            
                <div className="checkbox-container">
                  <input type="checkbox" id="showPassword" checked={showPassword} onChange={()=>setShowPassword(!showPassword)}/>
                  <label htmlFor="showPassword" style={{color:"#FFFCEF"}}>Show Password</label>
                </div>
                {errors.password && <span className="error" style={{color:"red"}}>{errors.password}</span>}

                <label htmlFor="power-point" style={{color:"#FFFCEF"}}>Strength of Password</label>
                <div className="power-container" style={{background:"#ddd", height:"10px", width:"100%", marginBottom:"15px"}}>
                  <div id="power-point" style={{background:passwordStrength===0?"#ddd":
                                                passwordStrength===1?"red":
                                                passwordStrength===2?"orange":
                                                passwordStrength===3?"yellow":"green",height:"100%", width:`${passwordStrength*25}%`, transition:"width 0.3s"}}>

                  </div>

                </div>

                <button type="submit">Register</button>
                <p style={{color:"#FFFCEF"}}>Already have an account?<a onClick={()=>navigate("/login")} style={{color:"#FFFCEF", cursor:"pointer", marginLeft:"5px", display:"underline"}}>Login here</a></p>

            </form>
          </div>
        </div>
    )

};

export default SignUp;