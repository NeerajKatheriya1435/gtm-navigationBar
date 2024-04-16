import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <main>
            <Header />
            <div>
                {children}
            </div>
        </main>
    )
}

export default Layout