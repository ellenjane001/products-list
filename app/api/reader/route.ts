import { NextRequest, NextResponse } from "next/server";
import * as XLSX from 'xlsx';

export async function POST(request: NextRequest, result: NextResponse) {
    try {
        // Read the XLSX file
        const workbook = XLSX.readFile('');

        // Get the names of all sheets in the workbook
        const sheetNames = workbook.SheetNames;

        // Access the first sheet
        const sheet = workbook.Sheets[sheetNames[0]];

        // Convert the sheet data to JSON
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        // Respond with the JSON data
        NextResponse.json({ status: 200, jsonData });
    } catch (e) {
        console.error('Error reading XLSX file:', e);
        NextResponse.json({ status: 500, error: 'Failed to read XLSX file' });
    }
}