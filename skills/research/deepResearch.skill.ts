import { ResearchAgent } from "../../agents/research.agent"

export async function deepResearch(topic:string){

const agent = new ResearchAgent()

return await agent.run(topic)

}
