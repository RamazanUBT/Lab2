import React, { Component } from "react";
import "./Profili.css";

export class Profili extends Component {
    render() {
        return (
            <div>
                <div className="profilifirst">
                    <h1>Profili</h1>
                    <button> <img src="images/Shkyqu.png" alt="Shkyqu" />Shkycu</button>
                </div>
                <div style={{display:"flex"}}>
                    <div className="tedhenat">
                        <h1>Te Dhenat</h1>
                        <div className="profiliinp">
                            {/* Profile input Emri*/} 
                            {/* Profile input Email*/}
                            {/* Profile input Password*/}
                            <button>Ndryshoni</button> 
                        </div>
                    </div>
                    <div className="statistikat">
                        
                    </div>
                </div>
            </div>    
        );

}}


export default Profili;