"use client"
import React from 'react'
import Styles from '../../app/page.module.css'
import { Grid } from '@mui/material'
import NavigationBar from '../navigation'
import { StyledPaper } from '../styled'
type layoutType = {
    children: React.ReactNode
}
const Layout = ({ children }: layoutType) => {
    return (
        <main>
            <StyledPaper>
                <Grid container direction="column">
                    <Grid item><NavigationBar /></Grid>
                    <Grid item>{children}</Grid>
                </Grid>
            </StyledPaper>
        </main>
    )
}

export default Layout