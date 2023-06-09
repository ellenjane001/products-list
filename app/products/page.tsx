"use client"
import Layout from '@/components/layout'
import { StyledPaper } from '@/components/styled'
import { CircularProgress } from '@mui/material'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

const Products = () => {
    const { data: session, status } = useSession()
    if (status === "loading") {
        return <StyledPaper> <CircularProgress /></StyledPaper>
    }
    if (status === "unauthenticated") {
        redirect('/')
    }
    return (
        <Layout>Products</Layout>
    )
}

export default Products