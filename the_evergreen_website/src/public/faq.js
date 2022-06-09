import React from 'react'
import { faq } from './data/faq'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown , faAngleUp } from '@fortawesome/free-solid-svg-icons'

class FAQ extends React.Component {
    collapse = (e) => {
        var id = e.target.id
        var ans = document.getElementById(id+'ans');
        ans.classList.toggle('show-faq');
    }

  render() {
    return (
   <>
    <h1 className='centered'>FAQ</h1>
    <div className='faq-sec'>
        {faq.map((data, key) => {
            return(
                <div className='faq-box' key={key}>
                    <div className='row' id={data.id} onClick={this.collapse}>
                        <div className='question faq' >{data.question}</div>
                        <FontAwesomeIcon icon={faAngleDown} className='faq-btn' id={data.id} onClick={this.collapse}/>
                    </div>
                    <div className='answer faq' id={data.id + 'ans'}>{data.answer}</div>
                </div>
            );
        })}
    </div>
   </>
   )
  }
}

export default FAQ

// function FAQ() {
//     collapse = (e) => {
//         var id = e.target.id
//         var ans = document.getElementById(id+'ans');
//         console.log(ans)
//     }
//   return (
//    <>
//     <h1 className='centered'>FAQ</h1>
//     <div className='faq-sec'>
//         {faq.map((data, key) => {
//             return(
//                 <div className='faq-box' key={key}>
//                     <div className='row'>
//                         <div className='question faq' id={data.id} onClick={this.collapse}>{data.question}</div>
//                         <FontAwesomeIcon icon={faAngleDown} id={data.id + 'ans'} className='faq-btn'/>
//                     </div>
//                     <div className='answer faq'>{data.answer}</div>
//                 </div>
//             );
//         })}
//     </div>
//    </>
//   )
// }

// export default FAQ