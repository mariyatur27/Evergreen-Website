import React , {useState} from 'react'
import { faq } from './data/faq'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown , faAngleUp } from '@fortawesome/free-solid-svg-icons'

class FAQ extends React.Component {
    collapse = (e) => {
        var id = e.target.id
        var ans = document.getElementById(id+'ans');
        ans.classList.toggle('show-faq');
        document.getElementById(id+'btn-down').classList.toggle('hide-obj');
        document.getElementById(id+'btn-up').classList.toggle('hide-obj');
    }

    dropBtn = (e) => {
        var id = e.target.id;
        var ans_id = id.substr(0, 5);
        console.log(ans_id)
        var ans = document.getElementById(ans_id+'ans');
        ans.classList.toggle('show-faq');
        var btn_up = document.getElementById(ans_id + 'btn-up');
        btn_up.classList.toggle('hide-obj');
        document.getElementById(id).classList.toggle('hide-obj');
    }

    closeBtn = (e) => {
        var id = e.target.id;
        var ans_id = id.substr(0, 5);
        var ans = document.getElementById(ans_id+'ans');
        ans.classList.toggle('show-faq');
        document.getElementById(ans_id + 'btn-down').classList.toggle('hide-obj');
        document.getElementById(id).classList.toggle('hide-obj');
    }

  render() {
    return (
   <>
    <h1 className='centered'>FAQ</h1>
    <div className='faq-sec'>
        {faq.map((data, key) => {
            return(
                <div className='faq-box' key={key} id={data.id} onClick={this.collapse}>
                    <div className='row'>
                        <div className='question faq' >{data.question}</div>
                        <FontAwesomeIcon icon={faAngleDown} className='faq-btn' id={data.id + 'btn-down'} onClick={this.dropBtn}/>
                        <FontAwesomeIcon icon={faAngleUp} className='faq-btn hide-obj' id={data.id + 'btn-up'} onClick={this.closeBtn}/>
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