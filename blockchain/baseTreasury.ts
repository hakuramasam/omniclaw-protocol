import { ethers } from "ethers"

export function baseProvider(){

return new ethers.JsonRpcProvider(
process.env.BASE_RPC
)

}
