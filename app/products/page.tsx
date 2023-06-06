'use client'
import AddProducts from '@/components/add-products'
import Layout from '@/components/layout'
import { Typography } from '@mui/material'

export default function products() {
    return (
        <Layout>
            <Typography variant='h5'>
                Products Management
            </Typography>
            <AddProducts />
        </Layout>
    )
}
