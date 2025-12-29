import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_WEBHOOK_URL ||
  'https://n8n.srv860867.hstgr.cloud/webhook/pierre-qualif-agent';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, sessionId } = body;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Envoyer au webhook n8n
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        sessionId,
        timestamp: new Date().toISOString(),
        source: 'discipline-illimitee-website',
      }),
    });

    if (!response.ok) {
      throw new Error(`Webhook responded with status: ${response.status}`);
    }

    const data = await response.json();

    // Extract output from N8N response format: [{ output: { output: "...", suggestions: [...] } }]
    let agentResponse = "Je comprends. Continue à me parler de ta situation. Plus tu es précis, plus je peux t'aider à trouver la solution adaptée.";
    let suggestions: string[] = [];

    if (Array.isArray(data) && data.length > 0 && data[0].output) {
      const output = data[0].output;
      agentResponse = output.output || agentResponse;
      suggestions = output.suggestions || [];
    } else if (data.output) {
      // Alternative format: { output: { output: "...", suggestions: [...] } }
      agentResponse = data.output.output || agentResponse;
      suggestions = data.output.suggestions || [];
    } else if (data.response) {
      // Fallback to simple response format
      agentResponse = data.response;
    }

    return NextResponse.json({
      success: true,
      response: agentResponse,
      suggestions: suggestions,
      data,
    });
  } catch (error) {
    console.error('Error calling webhook:', error);
    return NextResponse.json(
      {
        success: false,
        response:
          "Je comprends. Continue à me parler de ta situation. Plus tu es précis, plus je peux t'aider à trouver la solution adaptée.",
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 200 } // Return 200 to avoid showing errors to users
    );
  }
}
