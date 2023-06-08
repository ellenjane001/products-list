import React from 'react'
import Styles from '../../app/page.module.css'
type layoutType = {
    children: React.ReactNode
}
const Layout = ({ children }: layoutType) => {
    return (
        <main className={Styles.main}>
            {children}
        </main>
    )
}

export default Layout