import React from 'react'

//CSS
import './Layout.css'

const Layout = (props) => {
    return (
        <div>
            <header>
                <nav>
                    Star Wars Ships
                </nav>
            </header>

            <main>
                    {props.children}
            </main>
        </div>
    )
}

export default Layout