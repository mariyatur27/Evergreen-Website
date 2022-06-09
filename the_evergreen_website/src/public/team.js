import React from 'react'
import { team_members } from './data/team'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Team() {
  return (
   <>
    <h1 className='centered'>Meet Our Team</h1>
    <div className='row-3 middle'>
        {team_members.map((data, key) => {
            return(
                <div className='team-box' key={key}>
                    <h2>{data.name}</h2>
                    <h5>{data.status}</h5>
                    <p>{data.description}</p>
                    <div className='contact-socials'>
                        <a href={data.email} style={{marginRight: '2%'}}><FontAwesomeIcon icon={faEnvelope}/></a>
                        <a href={data.phone}><FontAwesomeIcon icon={faPhone} /></a>
                    </div>
                </div>
            );
        })}
    </div>
   </>
  )
}

export default Team