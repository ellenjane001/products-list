import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const NavigationBar = () => {
    return (
        <nav>
            <ul className='flex gap-2'>
                <li><Link href="/"><Button>Home</Button></Link></li>
                <li><Link href="/products"><Button>Products</Button></Link></li>
            </ul>
        </nav>
    )
}

export default NavigationBar