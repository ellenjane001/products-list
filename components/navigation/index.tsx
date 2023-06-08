"use client"
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { Button } from "@mui/material"

const NavigationBar = () => {
    const { data: session, status } = useSession()
    return (
        <nav>
            <li><Link href="/">Home</Link></li>
            {status == "authenticated" ?
                <>
                </>
                :
                <>
                    <li><Button onClick={() => signIn()}>Sign In</Button></li>
                </>
            }

        </nav>
    )
}

export default NavigationBar