export async function planTask(prompt:string){

if(prompt.includes("research")){
return {skill:"deepResearch",input:prompt}
}

if(prompt.includes("contract")){
return {skill:"buildContract",input:prompt}
}

return {skill:"deepResearch",input:prompt}

}
