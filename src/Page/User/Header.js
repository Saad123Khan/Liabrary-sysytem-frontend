import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
           <h2>View Users</h2>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Users</button>
            </div>
        </header>
    )
}

export default Header