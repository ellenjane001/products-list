"use client"
import Layout from '@/components/layout'
import { CircularProgress, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'
import React from 'react'
import { redirect } from 'next/navigation'
import { StyledPaper } from '@/components/styled'
import BatchUpload from '@/components/batch-upload'

const Batch = () => {
    const { data: session, status } = useSession()
    if (status === "loading") {
        return <StyledPaper> <CircularProgress /></StyledPaper>
    }
    if (status === "unauthenticated") {
        redirect('/')
    }
    return (
        <Layout>
            <Typography variant="h4">Batch Upload</Typography>
            <BatchUpload />
        </Layout>
    )
}

export default Batch