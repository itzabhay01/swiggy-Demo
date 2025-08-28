import React from "react" 
import {createRoot} from "react-dom/client"

const AppLayout = ()=>{
    return <h1>Namaste React</h1>
}
const root = createRoot(document.getElementById("root"))
console.log(root)
root.render(<AppLayout/>)