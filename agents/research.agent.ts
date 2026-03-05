import axios from "axios"

export class ResearchAgent {

async run(query:string){

const res = await axios.get(
"https://api.duckduckgo.com/?q="+query+"&format=json"
)

return res.data
}

}
