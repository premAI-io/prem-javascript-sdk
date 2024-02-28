# Prem Javascript SDK

## Installation

You can install the Prem Javascript SDK directly from npm.

```bash
npm install @premai/prem-sdk
```

## Usage

### Getting Started

To use the Prem Javascript SDK, you need to obtain an API key from the Prem platform. You can then create a `Prem` instance to make requests to the API.

```typescript
import Prem from '@premai/prem-sdk';

const client = new Prem({
  apiKey: "YOUR_API_KEY"
})

const project_id = PROJECT_ID
```

### Chat completion

The `chat.completions` module allows you to generate completions based on user input. Here's an example:

```typescript
const messages = [
    {"role": "user", "content": "Who won the world series in 2020?"},
]
const model = "gpt-3.5-turbo" // optional
const system_prompt = "You are a helpful assistant." // optional
const session_id = "my-session" // optional: a unique identifier to maintain session context, useful for tracking conversations or data across multiple requests

// Create completion
const responseSync = await client.chat.completions.create({
  project_id,
  messages,
  model,
  session_id,
  system_prompt,
  stream: false
})

console.log(responseSync)

// Create completion with stream
const responseAsync = await client.chat.completions.create({
  project_id,
  messages,
  model,
  session_id,
  system_prompt,
  stream: true
})

for await (const chunk of responseAsync) {
  if (chunk.choices[0].delta.content) {
    process.stdout.write(chunk.choices[0].delta.content)
  }
}

console.log("\nTrace ID", responseAsync.trace_id)
```
