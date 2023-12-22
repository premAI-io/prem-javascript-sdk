# @premai/prem

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
```

### Completions

The `completions` module allows you to generate completions based on user input. Here's an example:

```typescript
const project_id = 1
const model = "gpt-3.5-turbo"
const messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Who won the world series in 2020?"},
]

// Create completion
const response = await client.completions.create({
  project_id,
  messages,
  model,
  stream: false
})

console.log(response)

// Create completion with stream
const response = await client.completions.create({
  project_id,
  messages,
  model,
  stream: true
})

for await (const chunk of response) {
  if (chunk.choices[0].delta.content) {
    process.stdout.write(chunk.choices[0].delta.content)
  }
}

console.log("\nTrace ID": response.trace_id)
```

### Embeddings

The `embeddings` module enables you to create embeddings for given input. Example:

```typescript
const project_id = 1
const input = "What is a transformer?"
const model = "text-embedding-ada-002"

// Create embeddings
const response = await client.embeddings.create({
  project_id,
  input,
  model
})

console.log(response)
```

### Data Points

The `datapoints` module allows you to manage data points, including creating, updating, retrieving, and deleting. Example:

```typescript
const project_id = 1
const input = "How are you?"
const output = "I'm doing well, thanks for asking!"

// Create data point linked to trace
const dataPoint = await client.datapoints.create({
  input,
  output,
  positive: true,
  project_id,
  trace_id: "YOUR_TRACE_ID"
})

// Create 10 data points
let dataPoint
for (let i = 0; i < 10; i++) {
  dataPoint = await client.datapoints.create({
    input,
    output,
    positive: true,
    project_id
  })
}

// Update the last data point
const patchedDataPoint = await client.datapoints.update(dataPoint.id, { positive: false })

// Retrieve the updated data point
const dataPoint = await client.datapoints.retrieve(dataPoint.id)
console.log(dataPoint)

// Delete data point
await client.datapoints.delete(dataPoint.id)

// List all data points
const datapoints = await client.datapoints.list()
console.log("Total number of datapoints:", datapoints.length)
for (const datapoint of datapoints) {
  console.log("Deleting data point with ID:", datapoint.id)
  await client.datapoints.delete(datapoint.id)
}
```
