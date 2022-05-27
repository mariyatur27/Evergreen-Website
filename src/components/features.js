import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { featuresInfo } from './databases/data.js';

function Features() {
    
    var coll = document.getElementsByClassName("feature-box-text");
    for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        // this.classList.toggle("active");
        var content = this.nextElementSibling;
        content.classList.toggle('hide');
        // if (content.style.display === "block") {
        // content.style.display = "none";
        // } else {
        // content.style.display = "block";
        // }
    });
    }
    return (
        <div className='features main'>
            {featuresInfo.map((data, key) => {
                return(
                    <div key={key} className='feature-box'>
                        <h3 className='feature-box-text'>{data.icon}{data.feature_name}</h3>
                        <div className='content' id = {data.dscr_id}>{data.description}</div>
                    </div> 
                );
            })}
        </div>
    )
}

export default Features