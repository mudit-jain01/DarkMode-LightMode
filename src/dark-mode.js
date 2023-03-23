import { useState } from "react"

export default function DarkMode(){
    
    const [darkMode,setdarkMode]=useState(false)

    return(
        <div className={`page ${darkMode && 'dark-mode'}`}>
            <button className="dark-mode-button" onClick={()=>setdarkMode(true)}>
                Dark Mode
            </button>
            <button className="light-mode-button" onClick={()=>setdarkMode(false)}>
                Light Mode
            </button>
        </div>
    )
}