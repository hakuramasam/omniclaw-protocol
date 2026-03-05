export function selectRPC(latency:number){

if(latency > 400){
return "switch_rpc"
}

return "current_rpc"

}
