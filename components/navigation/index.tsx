"use client"
import { Button, Grid } from "@mui/material"
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const NavigationBar = () => {
    const { data: session, status } = useSession()
    return (
        <nav>
            <Grid container>
                <Grid item><Link href="/"><Button>Home</Button></Link></Grid>
                {status == "authenticated" &&
                    <>
                        <Grid item><Link href="/products"><Button>Products</Button></Link></Grid>
                        <Grid item><Link href="/batch"><Button>Batch Upload</Button></Link></Grid>
                        <Grid item><Button onClick={() => signOut()}>Sign Out</Button></Grid>
                    </>
                }
                {status == "unauthenticated" &&
                    <>
                        <Grid item><Button onClick={() => signIn()}>Sign In</Button></Grid>
                    </>
                }
            </Grid>


        </nav>
    )
}

export default NavigationBar