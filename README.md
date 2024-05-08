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

## Chat completion

The `chat.completions` module allows you to generate completions based on user input.

Note that `system` is NOT an acceptable role: to use a system prompt you should define and pass `system_prompt`.

Here's an example:

```typescript
const system_prompt = "You're an helpful assistant"
const messages = [
    { role: "user", content: "Who won the world series in 2020?" },
]

// Create completion
const responseSync = await client.chat.completions.create({
  project_id,
  system_prompt,
  messages
})

console.log(responseSync)
```

### Chat completion with stream

You can also create a completion with a stream to receive the response in chunks by passing the `stream` parameter as `true` (default is `false`).

```typescript

// Create completion with stream
const responseAsync = await client.chat.completions.create({
  project_id,
  messages,
  stream: true
})

for await (const chunk of responseAsync) {
  if (chunk.choices[0].delta.content) {
    process.stdout.write(chunk.choices[0].delta.content)
  }
}

console.log("\nTrace ID", responseAsync.trace_id)
```

### Optional parameters

By default, the `chat.completions` module uses the default launchpad parameters. You can also specify the following optional parameters:

- `model`: The model to use for completion. If omitted, the default launchpad model will be used.
- `system_prompt`: The system prompt to use for completion. If omitted, the default launchpad system prompt will be used.
- `session_id`: A unique identifier to maintain session context, useful for tracking conversations or data across multiple requests.
- `temperature`: The temperature to use for completion. If omitted, the default launchpad temperature will be used.
- `max_tokens`: The maximum number of tokens to generate for completion. If omitted, the default launchpad max tokens will be used.
- `top_p`: The nucleus sampling probability to use for completion. If omitted, the default launchpad top p will be used.
- `frequency_penalty`: The frequency penalty to use for completion. If omitted, the default launchpad frequency penalty will be used.
- `presence_penalty`: The presence penalty to use for completion. If omitted, the default launchpad presence penalty will be used.

Example:

```typescript
const model = "gpt-3.5-turbo"
const system_prompt = "You are a helpful assistant."
const session_id = "my-session"
const temperature = 0.7
const messages = [
    { role: "user", content: "Who won the world series in 2020?" },
]

// Create completion
const response = await client.chat.completions.create({
  project_id,
  messages,
  model,
  system_prompt,
  session_id,
  temperature
})

console.log(response)

```

## Enhanced Chat Completion with Retrieval Augmented Generation (RAG)

Enhance your chat completions by leveraging contextual data from specified `repositories`. A `repository` is a collection of `documents`, each containing information that can be utilized by the RAG system to provide enriched and context-aware responses.

**If you've linked your repositories in the launchpad, relax—you're all set for effortless chat completions!** The system automatically uses those parameters by default, ensuring a seamless and easy experience. However, if you wish to customize the process, you can specify the `repositories` parameter to fit your exact needs. Just define:

-   `ids`: Your selected repository IDs.
-   `similarity_threshold`: The least similarity score for content relevance.
-   `limit`: The number of content pieces to include.

For guidance on managing repositories, see the [Repositories](#repositories) section.

```typescript
const messages = [
    { role: "user", content: "Which is Jack's pet name?" },
]

const repositories = {
  ids: [REPOSITORY_ID, ...],
  similarity_threshold: 0.65,
  limit: 3
}

// Create completion
const response = await client.chat.completions.create({
  project_id,
  messages,
  repositories,
  stream: false
})

console.log(response.choices[0].message.content)
// "Jack's pet name is Sparky."

console.log(response.document_chunks)
// E.g. [{ repository_id=4, document_id=14, chunk_id=15, document_name="pets_and_their_owners.txt", similarity_score=0.67, content="..." }, ...]

```

## Repositories
Repositories act as storage for documents, organized to facilitate efficient information retrieval. Manipulating repository content is straightforward.
### Document creation
To add a document to a repository, you can use the `create` method provided by the `document` API. Here's an example of how to create and upload a document:

```typescript
const FILE_PATH = "pets_and_their_owners.txt"
// Content: "My friend Jack has a beautiful pet, he gave it the name Sparky, [...]"

const response = await client.repository.document.create(
    REPOSITORY_ID,
    {
        file: FILE_PATH
    }
)

console.log(response)
// E.g. {repository_id: 4, document_id: 14, name: "pets_and_their_owners.txt", type: "text", status: "UPLOADED", chunk_count: 0, error: null}
```

After uploading, the document state is reflected in fields such as:

-   `status`: Shows `UPLOADED` initially, changes once processed (e.g., `PROCESSING`).
-   `chunk_count`: Number of data chunks; starts at 0 and increases post-processing.
-   `error`: Non-null if an error arose during processing.

We currently support below file formats for document uploads:
-   `.txt`
-   `.pdf`
-   `.docx`
