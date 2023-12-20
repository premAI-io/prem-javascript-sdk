import Prem from "@premai/prem"

const prem = new Prem({
    apiKey: "API_KEY",
    baseUrl: "http://localhost:8000"
})

void(async() => {
  const response = await prem.chat.completions.create({
    project_id: 2,
    messages: [{
      role: "user",
      content: "Hello, how are you?"
    }],
    stream: true
  })

  for await (const chunk of response) {
    console.log("RECEIVED CHUNK")
    console.log(chunk)
  }

})()
  .catch((err): void => {
    console.error("ERROR:", err)
  })
