import { Link } from "react-router-dom";

export function Login1()
{
    return(<div>
       <div className="loginBox" style={{marginTop:"12%"}}>
               <div>
               <p style={{textAlign:"center",fontSize:"35px",marginBottom:"35px"}}>Login</p>
                
                <input placeholder={"User Name"} style={{padding:"6px 6px",margin:"4px"}}></input>
                <input placeholder={"Password"} style={{padding:"6px 6px",margin:"4px"}}></input>
                
                <button style={{
                padding: "5px 5px",
                fontSize: "16px",
                backgroundColor: "#4A4A4B",
                color: "white",
                borderRadius:"3px",
                marginTop: "10px",
              }}>Login with Test Cred</button>
              <p>Didn't Have Account <Link to="/Signup1">SignUp</Link></p>
               </div>
              
        </div>
    </div>)
}