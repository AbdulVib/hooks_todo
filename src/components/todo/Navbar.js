import React from 'react'

import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div style={{ border: '1px solid red', width: '100%', background: 'yellow', position: 'fixed', top: '0', left: '0'}}>
            <ul style={{ margin: '0 auto', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/todo">TODO</Link></li>
            </ul>
        </div>
    )
}
