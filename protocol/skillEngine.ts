import { deepResearch } from "../skills/research/deepResearch.skill"
import { buildContract } from "../skills/coding/smartContract.skill"

export async function executeSkill(name:string,input:any){

if(name==="deepResearch"){
return deepResearch(input)
}

if(name==="buildContract"){
return buildContract(input)
}

return "Skill not found"

}
