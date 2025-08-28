import React from "react" 
import {createRoot} from "react-dom/client"
import "./index.css"

const Header = ()=>{
    return (
        <div className="header">
            <img src="https://www.designevo.com/res/templates/thumb_small/gray-and-white-game-joystick.webp" alt="logo" width="100px"/>
            <ul className="nav-items">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}
const ConsoleCard = ({name,price,brand})=>{
    return (
        <div className="console-card">
            <img src="https://hips.hearstapps.com/hmg-prod/images/gh-index-gamingconsoles-052-print-preview-1659705142.jpg?crop=0.669xw:1.00xh;0.164xw,0&resize=1200:*" alt="logo" width="100px"/>
            <h3>{name}</h3>
            <h4>{brand}</h4>
            <h5>{price}</h5>
        </div>
    )
}
const Body = ()=>{
    return (
        <div className="body">
            <h3>Search</h3>
            <div className="console-list">
                <ConsoleCard name="Play Station 5" price="Rs.49999" brand="Sony"/>
                <ConsoleCard name="Xbox Series X" price="Rs.45999" brand="Microsoft"/>
                <ConsoleCard name="Nintendo Switch" price="Rs.29999" brand="Nintendo"/>
                <ConsoleCard name="Play Station 4" price="Rs.19999" brand="Sony"/>
                <ConsoleCard name="Xbox One" price="Rs.15999" brand="Microsoft"/>
                <ConsoleCard name="Nintendo Wii U" price="Rs.9999" brand="Nintendo"/>
            </div>
        </div>
    )
}
const AppLayout = ()=>{
    return (
        <>
        <Header/>
        <Body/>
        </>
    )
}
const root = createRoot(document.getElementById("root"))
console.log(root)
root.render(<AppLayout/>)