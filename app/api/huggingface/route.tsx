// app/api/huggingface/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { HfInference } from "@huggingface/inference";

export async function POST(request: NextRequest) {
  // Log environment variables for debugging
  console.log('Environment Variables:', {
    HUGGING_FACE_API_KEY: process.env.HUGGING_FACE_API_KEY ? 'SET' : 'NOT SET'
  });

  // Securely retrieve API key from environment variables
  const apiKey = process.env.HUGGING_FACE_API_KEY;

  if (!apiKey) {
    console.error('CRITICAL: Hugging Face API key is not configured');
    return NextResponse.json(
      { error: 'Hugging Face API key is not configured' }, 
      { status: 500 }
    );
  }

  try {
    // Log incoming request body for debugging
    const requestBody = await request.json();
    console.log('Incoming Request Body:', requestBody);

    // Create Hugging Face client with server-side API key
    const client = new HfInference(apiKey);

    // Perform chat completion
    const chatCompletion = await client.chatCompletion({
      model: "google/gemma-2-2b-it",
      messages: requestBody.messages || [
        {
          role: "user",
          content: requestBody.prompt || "What is the capital of France?"
        }
      ],
      provider: "nebius",
      max_tokens: requestBody.max_tokens || 500,
    });

    // Return the full response
    return NextResponse.json(chatCompletion);
  } catch (error) {
    console.error('FULL Hugging Face API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to process chat completion',
        details: error instanceof Error ? error.message : 'Unknown error',
        fullError: error
      }, 
      { status: 500 }
    );
  }
}