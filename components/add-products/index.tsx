import React from 'react'
import { useFormik } from 'formik';
import { Paper, TextField, Typography } from '@mui/material';
import { StyledPaper } from '../styled-components';

type productsType = {
    title: string
    body_html: string
    vendor: string
    product_type: string
    tags: [string]
}

const AddProducts = () => {
    const formik = useFormik<productsType>({
        initialValues: {
            title: '',
            body_html: '',
            vendor: '',
            product_type: '',
            tags: ['']
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <StyledPaper>
            <Typography variant='h6'>Add New Product</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField id="outlined-basic" name='title' label="Title" variant="outlined" onChange={formik.handleChange} value={formik.values.title} />
            </form>
        </StyledPaper>

    )
}

export default AddProducts