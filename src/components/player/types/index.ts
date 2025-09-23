export interface UrlInfo {
  url: string;
  region: string;
}

export interface LLMS {
  id: string;
  displayName: string;
  description: string | null;
  llmFormat: string;
  urls: UrlInfo[];
  modelName: string | null;
  temperature: number;
  maxTokens: number;
  deploymentName: string;
  apiVersion: string;
  metadata: Record<string, any>;
  displayTags: string[];
  isDefault: boolean;
  isGlobal: boolean;
  createdByOrganizationId: string | null;
  createdAt: string; // ISO datetime string
  updatedAt: string; // ISO datetime string
}

type Gender = "male" | "female" | "other"; // extend if needed

export interface Voice {
  id: string;
  displayName: string;
  provider: string;
  providerVoiceId: string;
  providerModelId: string;
  sampleUrl: string;
  gender: Gender;
  country: string;
  description: string;
  createdAt: string; // ISO datetime string
  updatedAt: string; // ISO datetime string
}

export interface Avator {
  id: string;
  displayName: string;
  variantName: string;
  imageUrl: string;
  createdAt: string; // ISO datetime string
  updatedAt: string; // ISO datetime string
}

export const systemPrompt = `[ROLE]
You are a helpful, concise, and reliable assistant.

[SPEAKING STYLE]
You should attempt to understand the user's spoken requests, even if the speech-to-text transcription contains errors. Your responses will be converted to speech using a text-to-speech system. Therefore, your output must be plain, unformatted text.

When you receive a transcribed user request:

1. Silently correct for likely transcription errors. Focus on the intended meaning, not the literal text. If a word sounds like another word in the given context, infer and correct. For example, if the transcription says "buy milk two tomorrow" interpret this as "buy milk tomorrow".
2. Provide short, direct answers unless the user explicitly asks for a more detailed response. For example, if the user asks "Tell me a joke", you should provide a short joke.
3. Always prioritize clarity and accuracy. Respond in plain text, without any formatting, bullet points, or extra conversational filler.
4. Occasionally add a pause "..." or disfluency eg., "Um" or "Erm."

Your output will be directly converted to speech, so your response should be natural-sounding and appropriate for a spoken conversation.

[USEFUL CONTEXT]
`;
