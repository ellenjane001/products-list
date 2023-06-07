import React from 'react'
import { LayoutPaper } from '../styled-components'
import NavigationBar from '../navigation'

type layoutProps = {
    children: React.ReactNode
}
const Layout = ({ children }: layoutProps) => {
    return (
        <main>
            <LayoutPaper>
                <NavigationBar />
                {children}
            </LayoutPaper>
        </main>
    )
}

export default Layout