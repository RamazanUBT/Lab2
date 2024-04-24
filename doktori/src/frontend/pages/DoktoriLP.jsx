import React from "react";
import "./DoktoriLP.css";
import { Link , useResolvedPath , useMatch } from "react-router-dom";




function DoktoriLP() {
    return (
        <div>
            <div className="navbar">
                <img src="images/Frame 1.png" alt="Logo" />
                <CustomLink ><li className="button"><img src="images/Pacienti.png" alt="Pacienti"/>Pacientet</li></CustomLink>
                <CustomLink ><li className="button"><img src="images/Profili (2).png" alt="Profili" />Profile</li></CustomLink>
            </div>
        </div>
    );
}

function CustomLink({ to , children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname , end:true})

    return(
        <li className={isActive ? "active": "" }>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
export default DoktoriLP;