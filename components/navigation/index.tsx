import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { useSession } from "next-auth/react"
import { LogoutButton } from '../next-auth-buttons'
import { StyledButtonLink } from '../styled-components'

const NavigationBar = () => {
    const { data: session, status } = useSession()
    return (
        <nav>
            <ul className='flex gap-2'>
                <li><Link href="/"><StyledButtonLink color='secondary'>Home</StyledButtonLink></Link></li>
                {status === "authenticated" &&
                    <>
                        <li><Link href="/products"><StyledButtonLink color='secondary'>Products</StyledButtonLink></Link></li>
                        <li><Link href="/batch"><StyledButtonLink color='secondary'>Batch Upload</StyledButtonLink></Link></li>
                        <li><LogoutButton /></li>
                    </>
                }
            </ul>
        </nav>
    )
}

export default NavigationBar