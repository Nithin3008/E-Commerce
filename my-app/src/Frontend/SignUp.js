import { Link } from "react-router-dom";
export function Signup1()
{
    return(
        
        <div>
            <header style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p style={{ fontSize: "35px" }}>
            Wheels of{" "}
            <span style={{ color: "orangered", fontWeight: "700" }}>
              Fortune
            </span>
          </p>
        </div>
        <nav>
          <Link className="linksTag" to="/Login1">
            Login
          </Link>
          <Link className="linksTag" to="/Login1">
            Whislist
          </Link>
          <Link className="linksTag" to="/Login1">
            Cart
          </Link>
        </nav>
      </header>
            <div className="loginBox" style={{marginTop:"8%"}}>
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
   }}>Register</button>
   
    </div>
   
</div>
        </div>
    )
}