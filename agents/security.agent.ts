export class SecurityAgent {

audit(code:string){

if(code.includes("tx.origin")){
return "Warning: tx.origin vulnerability"
}

return "No critical issue detected"

}

}
