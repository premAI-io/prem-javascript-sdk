import Prem from "@premai/prem-sdk"
import { expect } from "chai"

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set")
}

if (!process.env.PROJECT_ID) {
  throw new Error("PROJECT_ID environment variable is not set")
}

const project_id = +(process.env.PROJECT_ID)

const prem = new Prem({
    apiKey: process.env.API_KEY,
    baseUrl: "http://localhost:8000"
})

const _createDataPoint = async() => {
  const response = await prem.datapoints.create({
    positive: true,
    input: "Hello, how are you?",
    output: "I'm doing well, thanks for asking.",
    project: project_id
  })
  return response
}

describe("Prem SDK", () => {
  beforeEach((done) => setTimeout(done, 1000))

  describe("Chat completion", () => {
    it("Chat completion sync", async() => {
      const response = await prem.chat.completions.create({
        project_id,
        messages: [{
          role: "user",
          content: "Hello, how are you?"
        }],
        stream: false
      })

      expect(response.choices[0].message.content).to.be.a("string")
    })

    it("Chat completion async", async() => {
      const response = await prem.chat.completions.create({
        project_id,
        messages: [{
          role: "user",
          content: "Hello, how are you?"
        }],
        stream: true
      })

      for await (const chunk of response) {
        expect(chunk).to.be.an("object")
        expect(chunk.choices).to.be.an("array")
        expect(chunk.choices[0]).is.an("object")

        const choice = chunk.choices[0]

        if (choice.finish_reason === null) {
          expect(chunk?.choices[0]?.delta?.content).to.be.a("string")
        }
      }

      expect(response.trace_id).to.be.a("string")
    })
  })

  describe("Data points", () => {
    it("Create data point", async() => {
      const response = await _createDataPoint()
      expect(response.id).to.be.a("number")
    })

    it("Retrieve data point", async() => {
      const datapoint = await _createDataPoint()
      const response = await prem.datapoints.retrieve(datapoint.id)
      expect(response.id).to.be.a("number")
    })

    it("List data points", async() => {
      const response = await prem.datapoints.list()
      expect(response).to.be.an("array")
    })

    it("Delete data point", async() => {
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
    })

    it("Update data point", async() => {
      const datapoint = await _createDataPoint()
      const response = await prem.datapoints.update(datapoint.id, {
        output: "I'm doing well, thanks for asking. How are you?"
      })

      expect(response.id).to.be.a("number")
    })
  })

  describe("Embeddings", () => {
    it("Create embedding", async() => {
      const response = await prem.embeddings.create({
        input: ["Hello, how are you?"],
        project_id,
        model: "text-embedding-ada-002"
      })

      expect(response.data).to.be.an("array")
    })
  })
})
