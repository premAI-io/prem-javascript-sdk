# @premai/prem

## Installation

```bash
pip install @premai/prem
```

## Usage
### Getting Started
To use the Prem Python SDK, you need to obtain an API key from the Prem platform. You can then create a `Prem` instance to make requests to the API.

```typescript
import Prem from '@premai/prem';

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
  model
})

console.log(response)
```

### Embeddings

The `embeddings` module enables you to create embeddings for given input. Example:

```typescript
const project_id = 1
const input = "What is a transformer?"
const model = "text-embedding-ada-002"

// Create embeddings
response = await client.embeddings.create({
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
const input = "What is a transformer?"

// Create 10 data points
let dataPoint
for (let i = 0; i < 10; i++) {
  dataPoint = await client.datapoints.create({
    project_id,
    input,
    positive: true
  })
}

// Update the last data point
const patchedDataPoint = await client.datapoints.update({
  datapoint_id: dataPoint.id,
  positive: false
})

// Retrieve the updated data point
const dataPoint = await client.datapoints.retrieve({ datapoint_id: dataPoint.id })
console.log(dataPoint)

// Delete data point
await client.datapoints.delete({
  datapoint_id: dataPoint.id
})

// List all data points
const datapoints = await client.datapoints.list({ project_id: 1 })
console.log("Total number of datapoints:", datapoints.length)
for const datapoint of datapoints:
    console.log("Deleted data point with ID:", datapoint.id)
    await client.datapoints.delete({ datapoint_id: datapoint.id })
```
