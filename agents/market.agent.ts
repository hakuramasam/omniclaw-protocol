export class MarketAgent {

estimateDemand(tasks:number){

if(tasks > 1000) return 2.5
if(tasks > 500) return 1.8
if(tasks > 100) return 1.2

return 1

}

}
