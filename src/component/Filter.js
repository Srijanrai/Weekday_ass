import React, { useState } from 'react'

function Filter() {
    const[exp,setExp] = useState('');
    const[company,setCompany] = useState('');
    const[location,setLocation] = useState('');
    const[jobtype,setJobtype] = useState('');
    const[techstack,setTechstack] = useState('');
    const[role,setRole] = useState('');
    const[pay,setPay] = useState('');
    return (
        <div className='filter_top'>
            <div className='filter_1'>
                <div className='minexp box'>
                    <input className='input_css' placeholder='Min exp' onChange={(e) => setExp(e.target.value)} />
                </div>
                <div className='minexp box'>
                    <input className='input_css' placeholder='Company Name' onChange={(e) => setCompany(e.target.value)}/>
                </div>
                <div className='minexp box'>
                    <input className='input_css' placeholder='Location' onChange={(e) => setLocation(e.target.value)}/>
                </div>
                <div className='minexp box'>
                    <select id="location" value={jobtype} className='drop_css' onChange={(e) => setJobtype(e.target.value)} >
                        <option value="" placeholder='Job type'>Job Type</option>
                        <option value="remote">Remote</option>
                        <option value="onsite">Onsite</option>
                    </select>
                </div>
                <div className='minexp box'>
                    <input className='input_css' placeholder='Tech Stack' onChange={(e) => setTechstack(e.target.value)} />
                </div>
                <div className='minexp box'>
                    <input className='input_css' placeholder='Role' onChange={(e) => setRole(e.target.value)}/>
                </div>
                <div className='minexp box'>
                    <input className='input_css' placeholder='Base pay' onChange={(e) => setPay(e.target.value)}/>
                </div>
            </div>
            <div className='filter'>
            </div>
        </div>
    )
}

export default Filter
