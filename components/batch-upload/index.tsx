"use client"

import { Button } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

const BatchUpload = () => {
    const [selectedFile, setSelectedFile] = useState<Blob>();
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        } else {
            setSelectedFile(undefined);
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            // Here you can perform the file upload using an API or any other method
            // For simplicity, let's just log the selected file details
            console.log('Uploading file:', selectedFile.name);
        } else {
            console.log('No file selected.');
        }
    };
    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <Button onClick={handleUpload} variant="contained">Upload</Button>
        </div>
    )
}

export default BatchUpload