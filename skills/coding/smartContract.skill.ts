import { CodeAgent } from "../../agents/code.agent"

export async function buildContract(spec:string){

const agent = new CodeAgent()

return agent.generate(
"Create Solidity contract: "+spec
)

}
