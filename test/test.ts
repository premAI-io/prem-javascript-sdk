import Prem from "@premai/prem-sdk"

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
    if (chunk.choices[0].delta.content) {
      process.stdout.write(chunk.choices[0].delta.content)
    }
  }

})()
  .catch((err): void => {
    console.error("ERROR:", err)
  })


