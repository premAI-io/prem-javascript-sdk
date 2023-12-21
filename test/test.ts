import Prem from "@premai/prem-sdk"

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set")
}

const project_id = +(process.env.PROJECT_ID || "2")

const prem = new Prem({
    apiKey: process.env.API_KEY,
    baseUrl: "http://localhost:8000"
})

const asyncChatCompletion = async() => {
  const response = await prem.chat.completions.create({
    project_id,
    messages: [{
      role: "user",
      content: "Hello, how are you?"
    }],
    stream: true
  })

  for await (const chunk of response) {
    if (chunk.choices[0].delta.content) {
      process.stdout.write(chunk.choices[0].delta.content)
    }
  }
}

const syncChatCompletion = async() => {
  const response = await prem.chat.completions.create({
    project_id,
    messages: [{
      role: "user",
      content: "Hello, how are you?"
    }],
    stream: false
  })

  console.log(response)
}

const _createDataPoint = async() => {
  const response = await prem.datapoints.create({
    positive: true,
    input: "Hello, how are you?",
    output: "I'm doing well, thanks for asking.",
    project: project_id
  })
  return response
}

const createDataPoint = async() => {
  const response = await _createDataPoint()
  console.log(response)
}

const retrieveDataPoint = async() => {
  const datapoint = await _createDataPoint()
  const response = await prem.datapoints.retrieve(datapoint.id)
  console.log(response)
}

const listDataPoints = async() => {
  const response = await prem.datapoints.list()
  console.log(response)
}

const deleteDataPoint = async() => {
  const datapoint = await _createDataPoint()
  await prem.datapoints.delete(datapoint.id)

  let retrieved = false
  try {
    await prem.datapoints.retrieve(datapoint.id)
    retrieved = true
  } catch (_) {}

  if (retrieved) {
    throw new Error("Data point was not deleted")
  }

  console.log("Data point deleted")
}

const updateDataPoint = async() => {
  const datapoint = await _createDataPoint()
  const response = await prem.datapoints.update(datapoint.id, {
    output: "I'm doing well, thanks for asking. How are you?"
  })

  console.log(response)
}

const createEmbedding = async() => {
  const response = await prem.embeddings.create({
    input: ["Hello, how are you?"],
    project_id,
    model: "text-embedding-ada-002"
  })

  console.log(response)
}

void(async() => {
  // console.log("Async chat completion:")
  // await asyncChatCompletion()

  // console.log("\nSync chat completion:")
  // await syncChatCompletion()

  // console.log("\nCreate data point:")
  // await createDataPoint()

  // console.log("\nRetrieve data point:")
  // await retrieveDataPoint()

  // console.log("\nList data points:")
  // await listDataPoints()

  // console.log("\nDelete data point:")
  // await deleteDataPoint()

  // console.log("\nUpdate data point:")
  // await updateDataPoint()

  // console.log("\nCreate embedding:")
  // await createEmbedding()
})()
  .catch((err): void => {
    console.error("ERROR:", err)
  })


