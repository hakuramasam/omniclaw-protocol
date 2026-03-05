import { ethers } from "ethers"

export function monadProvider(){

return new ethers.JsonRpcProvider(
process.env.MONAD_RPC
)

}
