import React, { Component } from 'react'
import "./TodoInput"
export default function ThemeToggle() {
    return (
        <footer>
           <button className="theme-toggle" onClick={() => {
                document.body.classList.toggle('dark-mode');    
                document.body.classList.toggle('light-mode');
                }}>Theme</button>
        </footer>
    )
}

