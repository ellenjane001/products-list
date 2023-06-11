import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest, result: NextResponse) => {
    try {

        return NextResponse.json(request.file);
        // // Read the XLSX file
        // const workbook = XLSX.readFile('');

        // // Get the names of all sheets in the workbook
        // const sheetNames = workbook.SheetNames;

        // // Access the first sheet
        // const sheet = workbook.Sheets[sheetNames[0]];

        // // Convert the sheet data to JSON
        // const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        // Respond with the JSON data
        // return NextResponse.json({ status: 200, body: { ...request.body } });
    } catch (e) {
        return NextResponse.json({ status: 500, error: e });
    }
    // console.error('Error reading XLSX file:', e);
    // NextResponse.json({ status: 500, error: 'Failed to read XLSX file' });
}