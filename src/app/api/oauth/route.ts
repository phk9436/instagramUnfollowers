import { getAccessToken } from '@/app/_util/oauth';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { clientId, clientSecret, redirectUri, accessCode } = await req.json();
    const data = await getAccessToken(clientId, clientSecret, redirectUri, accessCode);
    if(data) {
      return NextResponse.json(data, { status: 200 })
    }
  } catch (error) {
    console.error('Error sending POST request:', error);
    return NextResponse.json('Error sending POST request', { status: 500 });
  }
}