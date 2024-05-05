import React, { useState } from 'react'

function Detail(props) {
   // console.log(props.card)
    const idx = props.index;
    const compname = props.card.companyName;
    const image = props.card.logoUrl;
    const jobrole=props.card.jobRole;
    const location=props.card.location
    const minexp = props.card.minExp;
    const maxexp = props.card.maxExp;
    const minsal = props.card.minJdSalary
    const maxsal = props.card.maxJdSalary
    const jobdet = props.card.jobDetailsFromCompany

    return (
        <div className='card_body'>
            <div className='card_body1'>
                <p className='card_body2'></p>
                <div className='card_des'>
                    <div className='card_des1'>
                        <img className='logo'src={image}></img>
                        <div>
                            <div className='info_con'>
                             <h3 className='comp_name'>{compname}</h3>
                             <h2 className='role'>{jobrole}</h2>
                            </div>
                            <p className='loc_exp'>
                                {location} {minexp && maxexp ? ` | ${minexp} - ${maxexp}` : null}
                            </p>
                            <p className='salary'>
                        Estimated Salary: {minsal && maxsal ? `${minsal} - ${maxsal} LPA` : null}
                        </p>
                        <div className='jd-link-container'>
                          <div className='hard-lang-container'>
                          </div>
                        </div>
                        <div className='about_com'>
                           <div>
                            <p className='about_com1'>About Company:</p>
                            <p>
                                <strong>Job description</strong>
                            </p>
                            <div className='detail'>
                             {jobdet}
                            </div>
                           </div>
                        </div>
                         <div className='exp_req'>
                         <h3 className='comp_name'style={{marginTop: '10px'}}>Minimum Experience</h3>
                         <h2 className='role'>{minexp} years</h2>
                         </div>
                        </div>
                        
                  </div>
                  <div className='apply'>
                         <div className='apply1'>
                          <button className='b1'>Easy Apply</button>
                         </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
