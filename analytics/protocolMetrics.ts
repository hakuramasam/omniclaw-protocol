export const metrics = {

tasks:0,
revenue:0,
activeAgents:0

}

export function recordTask(){

metrics.tasks++

}

export function recordRevenue(amount:number){

metrics.revenue += amount

}
