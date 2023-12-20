const Prem = require("../.")

const prem = new Prem({
    apiKey: "API_KEY",
    baseUrl: "http://localhost:8000"
})

void(async() => {
  const res = await prem.chat.completions.create({
    project_id: 2,
    messages: [{
      role: "user",
      content: "Hello, how are you?"
    }]
  })

  console.log(res.choices[0].message)
})()
