export function autoscale(load:number){

if(load > 80){
return "scale_up"
}

if(load < 30){
return "scale_down"
}

return "stable"

}
