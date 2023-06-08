import React from 'react'
import { useFormik } from 'formik';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { StyledButton, StyledPaper } from '../styled-components';

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
            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-2'>
                {/* title */}
                <TextField id="outlined-basic" name='title' label="Title" variant="outlined" onChange={formik.handleChange} value={formik.values.title} />
                {/* body html */}
                <TextField id="outlined-basic" name='body_html' label="Body HTML" variant="outlined" onChange={formik.handleChange} value={formik.values.body_html} />
                {/* vendor */}
                <TextField id="outlined-basic" name='vendor' label="Vendor" variant="outlined" onChange={formik.handleChange} value={formik.values.vendor} />
                {/* product type */}
                <TextField id="outlined-basic" name='product_type' label="Product Type" variant="outlined" onChange={formik.handleChange} value={formik.values.product_type} />
                {/* tags */}
                <TextField id="outlined-basic" name='tags' label="Tags" variant="outlined" onChange={formik.handleChange} value={formik.values.tags} />
                <StyledButton variant='contained' color="primary" type="submit">Save</StyledButton>
            </form>
        </StyledPaper>
    )
}

export default AddProducts