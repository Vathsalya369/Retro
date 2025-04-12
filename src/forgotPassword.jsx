import {NavElement} from './Menu';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ForgotPassword=()=>{
    const [email, setEmail]=useState("");
    const [message, setMessage]=useState("");
    const [isEmailVerified, setIsEmailVerified]=useState(false);
    const [newPassword, setNewPassword]=useState("");
    const [confirmPassword, setConfirmPassword]=useState("");
    const [errors, setErrors]=useState("");
    const [showPassword, setShowPassword]=useState(false);

    const navigate=useNavigate();

    const verifyEmail=(e)=>{
        e.preventDefault();

        if(!email){
            setMessage("Please enter yout email address");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.email.toLowerCase().trim() === email.toLowerCase().trim());
    
        if (user) {
            setIsEmailVerified(true);
            setMessage("Email verified. Please create a new password.");
        } 
        else {
            setMessage("Email not found. Please check your email or register a new account.");
        }

    };

    const updatePassword = (e) => {
        e.preventDefault();
        
        if (newPassword.length < 6) {
          setErrors("Password must be at least 6 characters long");
          return;
        }
        
        if (newPassword !== confirmPassword) {
          setErrors("Passwords do not match");
          return;
        }
        
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const userIndex = users.findIndex(user => user.email === email);

        if (userIndex === -1) {
            setErrors("User not found");
            return;
        }

        if (users[userIndex].password === newPassword) {
            setErrors("New password should not be the same as the old password");
            alert("New password should not be the same as the old password");
            return;
        }

        users[userIndex].password = newPassword;
        localStorage.setItem("users", JSON.stringify(users));
        
        alert("Password updated successfully!");
        navigate("/login");
    };

    return (
        <div>
          <NavElement />
          <div className="body">
            {!isEmailVerified ? (
              // Email verification form
              <form className="form" onSubmit={verifyEmail}>
                <h3 className="heading" style={{ color: "#FFFCEF" }}>Forgot Password</h3>
                
                {message && (
                  <div style={{ color: message.includes("not") ? "red" : "green", marginBottom: "10px" }}>
                    {message}
                  </div>
                )}
                
                <p style={{ color: "#FFFCEF" }}>Please enter your email address to reset your password</p>
                
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ marginBottom: "10px" }}
                  required
                />
                
                <button type="submit">Verify Email</button>
                
                <p style={{ color: "#FFFCEF" }}>
                  <a onClick={() => navigate("/login")} style={{ color: "#FFFCEF", cursor: "pointer" }}>
                    Back to Login
                  </a>
                </p>
              </form>
            ) : (
              // Password reset form
              <form className="form" onSubmit={updatePassword}>
                <h3 className="heading" style={{ color: "#FFFCEF" }}>Reset Password</h3>
                
                {message && (
                  <div style={{ color: "green", marginBottom: "10px" }}>
                    {message}
                  </div>
                )}
                
                {errors && (
                  <div style={{ color: "red", marginBottom: "10px" }}>
                    {errors}
                  </div>
                )}
                
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  style={{ marginBottom: "10px" }}
                  required
                />
                
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{ marginBottom: "10px" }}
                  required
                />
                
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="showPassword"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  <label htmlFor="showPassword" style={{ color: "#FFFCEF" }}>
                    Show Password
                  </label>
                </div>
                
                <button type="submit">Update Password</button>
              </form>
            )}
          </div>
        </div>
    );
}

export default ForgotPassword;