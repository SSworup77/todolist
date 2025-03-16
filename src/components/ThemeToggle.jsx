import React, { Component } from 'react'
export default function ThemeToggle() {
    return (
        <div className='toggle-btn'>
           <button className="theme-toggle" onClick={() => {
                document.body.classList.toggle('dark-mode');    
                document.body.classList.toggle('light-mode');
                }}>DRK</button>
        </div>
    )
}

