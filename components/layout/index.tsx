import React from 'react'
import { LayoutPaper } from '../styled-components'

type layoutProps = {
    children: React.ReactNode
}
const Layout = ({ children }: layoutProps) => {
    return (
        <main className="flex min-h-screen flex-col items-center p-2">
            <LayoutPaper>
                {children}
            </LayoutPaper>
        </main>
    )
}

export default Layout