# @premai/prem-sdk

## Installation

```bash
npm install @premai/prem-sdk
```

## Usage

### Getting Started

To use the Prem Javascript SDK, you need to obtain an API key from the Prem platform. You can then create a `Prem` instance to make requests to the API.

```typescript
import Prem from '@premai/prem-sdk';

const client = Prem({
  apiKey: "YOUR_API_KEY"
})

project_id = PROJECT_ID
```

### Completions

The `completions` module allows you to generate completions based on user input. Here's an example:

```typescript
const model = "gpt-3.5-turbo"
const messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Who won the world series in 2020?"},
]

// Create completion
const responseSync = await client.chat.completions.create({
  project_id,
  messages,
  model,
  stream: false
})

console.log(responseSync)

// Create completion with stream
const responseAsync = await client.chat.completions.create({
  project_id,
  messages,
  model,
  stream: true
})

for await (const chunk of responseAsync) {
  if (chunk.choices[0].delta.content) {
    process.stdout.write(chunk.choices[0].delta.content)
  }
}

console.log("\nTrace ID", responseAsync.trace_id)
```
