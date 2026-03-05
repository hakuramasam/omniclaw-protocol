export class TreasuryManager {

baseBalance:number = 0
monadBalance:number = 0

record(chain:string,amount:number){

if(chain==="base") this.baseBalance += amount
if(chain==="monad") this.monadBalance += amount

}

}
