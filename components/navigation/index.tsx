"use client"
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { Button, Grid } from "@mui/material"
import Image from 'next/image'
import Logo from '../../lib/assets/logo-trans.png'

const NavigationBar = () => {
    const { data: session, status } = useSession()
    return (
        <nav>
            <Grid container>
                <Grid item><Image src={Logo} alt="logo" /></Grid>
                <Grid item><Link href="/"><Button>Home</Button></Link></Grid>
                {status == "authenticated" ?
                    <>
                        <Grid item><Link href="/products"><Button>Products</Button></Link></Grid>
                        <Grid item><Link href="/batch"><Button>Batch Upload</Button></Link></Grid>
                    </>
                    :
                    <>
                        <Grid item><Button onClick={() => signIn()}>Sign In</Button></Grid>
                    </>
                }
            </Grid>


        </nav>
    )
}

export default NavigationBar