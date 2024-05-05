import React from 'react'
import './Global.css'
import Header from './Header'
function Home() {
  return (
    <div className='home_css'>
        <Header/>
        <div className='top'>
        <div className='top_txt'>
            <p className='text_css'>We, at Weekday, are creating a go-to hub for uncovering the real issues candidates should be aware of before joining a company.
            <a className='link_css' target="_blank" rel="noopener" href="https://www.weekday.works/companies-work-culture-database">Access 150+ company reviews here</a>
            </p>
        </div>
        </div>
        <div className='filter_css'>
        </div>
    </div>
  )
}

export default Home
