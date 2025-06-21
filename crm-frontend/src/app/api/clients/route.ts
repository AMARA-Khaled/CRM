import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'clients.json');

export async function POST(req: NextRequest) {
  try {
    const newEntry = await req.json();

    // Read current data
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Append
    data.push(newEntry);

    // Write back
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return ;
  } catch (err) {
    return ;
  }
}
