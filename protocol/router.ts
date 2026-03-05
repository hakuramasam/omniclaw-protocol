import { planTask } from "./taskPlanner"
import { executeSkill } from "./skillEngine"

export async function runTask(prompt:string){

const plan = await planTask(prompt)

const result = await executeSkill(plan.skill,plan.input)

return result

}
