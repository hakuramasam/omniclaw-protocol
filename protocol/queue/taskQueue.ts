import Queue from "bull"

export const taskQueue = new Queue(
"omniclaw-tasks",
process.env.REDIS_URL
)

export async function addTask(data:any){

await taskQueue.add(data)

}
