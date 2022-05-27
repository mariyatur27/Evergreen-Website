import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faqContent } from './databases/faq_content';
import useCollapse from 'react-collapsed';

function FAQ() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div className='features main'>
            {faqContent.map((data, key) => {
                return(
                    <div key={key} className='question-box' data-question={data.target}>
                        <div className='box-question' {...getToggleProps()}>
                            {data.question}
                        </div>
                        <div className='box-answer' id={data.target} {...getCollapseProps()}>{data.answer}</div>
                    </div> 
                );
            })}
        </div>
    )
}

export default FAQ