import OpenAI from "openai"

export class CodeAgent {

async generate(prompt:string){

const client = new OpenAI({
apiKey:process.env.OPENAI_KEY
})

const res = await client.chat.completions.create({
model:"gpt-4o-mini",
messages:[
{role:"user",content:prompt}
]
})

return res.choices[0].message.content

}

}
