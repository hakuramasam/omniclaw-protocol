const skills = new Map()

export function registerSkill(name:string,skill:any){

skills.set(name,skill)

}

export function getSkill(name:string){

return skills.get(name)

}
