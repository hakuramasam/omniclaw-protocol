import { ethers } from "ethers"

export async function deploy(bytecode:string){

const provider = new ethers.JsonRpcProvider(
process.env.BASE_RPC
)

return "Deployment stub"

}
