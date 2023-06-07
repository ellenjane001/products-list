import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { useSession } from "next-auth/react"

const NavigationBar = () => {
    const { data: session, status } = useSession()
    return (
        <nav>
            <ul className='flex gap-2'>
                <li><Link href="/"><Button>Home</Button></Link></li>
                {status === "authenticated" && <li><Link href="/products"><Button>Products</Button></Link></li>}
            </ul>
        </nav>
    )
}

export default NavigationBar