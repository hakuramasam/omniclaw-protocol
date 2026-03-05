export function optimize(cost:number){

if(cost > 1000){
return "reduce_workers"
}

return "normal"

}
