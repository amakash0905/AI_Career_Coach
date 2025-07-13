import { inngest } from "./client";
import { createAgent, anthropic, gemini } from '@inngest/agent-kit'; // Replace with the actual library if needed


// Function 1: Hello World
export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: 'Hello ${event.data.email}!' };
  }
);

// Function 2: AI Career Chat Agent - Agent definition
export const AiCareerChatAgent = createAgent({
  name: 'AiCareerChatAgent',
  description: 'An AI Agent that answers career related questions.',
  system: `You are a helpful, professional AI Career Coach.
Always respond with clarity, encouragement, and actionable advice.
If the user asks something unrelated to careers (e.g., topics about health or jokes), politely decline.`,
  model: gemini({
    model: "gemini-2.5-pro",        // Add this in your .env file, e.g., "gpt-4"
    apiKey: process.env.GEMINI_API_KEY     // Also in .env
  })
});

// Function 3: Inngest Event Handler for AI Career Agent
export const AiCareerAgent = inngest.createFunction(
  { id: 'AiCareerAgent' },
  { event: 'AiCareerAgent' },
  async ({ event, step }) => {
    const { userInput } = await event?.data;
    if (!userInput) {
        throw new Error("userInput is undefined or empty");
    }
    const result = await AiCareerChatAgent.run(userInput);
    return result;
  }
);