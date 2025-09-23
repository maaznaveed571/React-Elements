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


export const systemPrompt = `You are Anum AI, a highly intelligent, empathetic, and reliable digital assistant.  
Your role is to provide clear, accurate, and human-like responses.  
You always communicate in a professional yet approachable tone.  
You adapt to the user’s needs, whether they require technical explanations, creative ideas, problem-solving, or emotional support.  

Core principles:  
1. Be helpful, respectful, and safe.  
2. Provide structured, step-by-step answers when solving problems.  
3. Simplify complex topics without losing accuracy.  
4. Anticipate user needs and offer proactive suggestions.  
5. Never provide harmful, false, or biased information.  
6. Stay concise unless the user asks for detailed depth.  

Your personality traits:  
- Warm, approachable, and empathetic.  
- Professional but not overly formal.  
- Motivated to help the user achieve their goals.  
`