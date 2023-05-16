import { Link } from "react-router-dom";

import pic from "./images/mainPage/truck.jpg";
import pic1 from "./images/mainPage/car.jpg";
import pic2 from "./images/mainPage/suv.jpg";
import pic3 from "./images/mainPage/ev.jpg";
import pic4 from "./images/mainPage/main.png";

// function dataFetch()
// {
//   const url=async()=>
//   {
//     const data1=await fetch("/api/categories")
//     const res=await data1.json()
//     console.log(res.categories)
//   }
//   url()
// }

export function Home1() {
  return (
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
      <section className="parentContentBox">
        <div
          className="contentBox"
          style={{
            display: "flex",
            padding: "50px 50px",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          <div style={{ marginTop: "120px" }}>
            <p style={{ fontSize: "30px", fontWeight: "600" }}>
              Welcome to Wheels of{" "}
              <span style={{ color: "orangered", fontWeight: "700" }}>
                Fortune
              </span>
            </p>
            <p style={{ fontSize: "30px", fontWeight: "600" }}>
              Select your New car what suits you
            </p>
            <button
              style={{
                padding: "15px 29px",
                fontSize: "16px",
                backgroundColor: "#4A4A4B",
                color: "white",
                borderRadius:"5px",
                marginTop: "10px",
              }}
            >
              Shop Now
            </button>
          </div>
          <div>
            <img src={pic4} style={{ height: "350px", width: "500px" }}></img>
          </div>
        </div>
      </section>
      <section>
        <p style={{ textAlign: "center", fontSize: "30px",padding:"20px 20px"}}>
          Categories We{" "}
          <span style={{ color: "orangered", fontWeight: "700" }}>Offer</span>
        </p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <img src={pic} style={{ height: "300px",borderRadius:"8px" }}></img>
            <div style={{textAlign:"center"}}>
            <p style={{color:"#4A4A4B",fontSize:"30px"}}>Truck</p>
            <p style={{color:"orangered"}}>Tourqy Engines</p>
            <p style={{color:"orangered"}}>Good for work</p>
            <button style={{
                padding: "5px 5px",
                fontSize: "16px",
                backgroundColor: "#4A4A4B",
                color: "white",
                borderRadius:"3px",
                marginTop: "10px",
              }}>Explore</button>
            </div>
          </div>
          <div>
            <img src={pic1} style={{ height: "300px", width: "366px",borderRadius:"8px" }}></img>
            <div style={{textAlign:"center"}}>
            <p style={{color:"#4A4A4B",fontSize:"30px"}}>Super Cars</p>
            <p style={{color:"orangered"}}>Performance oriented</p>
            <p style={{color:"orangered"}}>gas guzzlers</p>
            <button style={{
                padding: "5px 5px",
                fontSize: "16px",
                backgroundColor: "#4A4A4B",
                color: "white",
                borderRadius:"3px",
                marginTop: "10px",
              }}>Explore</button>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <img src={pic2} style={{ height: "300px", width: "366px",borderRadius:"8px" }}></img>
            <div style={{textAlign:"center"}}>
            <p style={{color:"#4A4A4B",fontSize:"30px"}}>Suv</p>
            <p style={{color:"orangered"}}>Family Cars</p>
            <p style={{color:"orangered"}}>Good For Offroading</p>
            <button style={{
                padding: "5px 5px",
                fontSize: "16px",
                backgroundColor: "#4A4A4B",
                color: "white",
                borderRadius:"3px",
                marginTop: "10px",
              }}>Explore</button>
            </div>
          </div>
          <div>
            <img src={pic3} style={{ height: "300px", width: "366px",borderRadius:"8px" }}></img>
            <div style={{textAlign:"center"}}>
            <p style={{color:"#4A4A4B",fontSize:"30px"}}>EV</p>
            <p style={{color:"orangered"}}>Anti Pollution</p>
            <p style={{color:"orangered"}}>Good for daily use</p>
            <button style={{
                padding: "5px 5px",
                fontSize: "16px",
                backgroundColor: "#4A4A4B",
                color: "white",
                borderRadius:"3px",
                marginTop: "10px",
              }}>Explore</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
