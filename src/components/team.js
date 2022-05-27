import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { teamData } from './databases/team_data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faPhone} from '@fortawesome/free-solid-svg-icons'

function Team() {
    return (
        <div className='main' style={{marginLeft: '0%'}}>
            <div className='title'><h1>Meet Our Team</h1></div>
            <div className='team'>
                {teamData.map((data, key) => {
                    return(
                        <div className='team-box' key={key}>
                        <img className='team-img' src={data.image} />
                        <div className='team-info'>
                            <h2>{data.name}</h2>
                            <h5>{data.title}</h5>
                            <p>{data.description}</p>
                        </div>
                        <div className='socials-contact' style={{display: 'flex', justifyContent: 'center'}}>
                            <a href={data.email}><FontAwesomeIcon icon={faEnvelope} style={{marginRight: '3%', marginTop: '3%'}}/></a>
                            <a href={data.tel}><FontAwesomeIcon icon={faPhone} style={{marginTop: '3%'}}/></a>
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Team