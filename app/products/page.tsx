'use client'
import AddProducts from '@/components/add-products'
import Layout from '@/components/layout'
import { CircularProgress, Typography } from '@mui/material'
import React from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { LayoutPaper } from '@/components/styled-components'

export default function Products() {
    const { data: session, status } = useSession()
    if (status === "unauthenticated") {
        redirect("/")
    }
    if (status === "loading") {
        return (<LayoutPaper><CircularProgress /></LayoutPaper>)
    }
    return (
        <Layout>
            <Typography variant='h5'>
                Products Management
            </Typography>
            <AddProducts />
        </Layout>
    )
}
