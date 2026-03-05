import { Worker } from "worker_threads"

export class SwarmManager {
  workers: Worker[] = []

  start(size: number) {
    for (let i = 0; i < size; i++) {
      const worker = new Worker("./agentWorker.js")
      this.workers.push(worker)
    }
  }

  dispatch(task: any) {
    const worker = this.workers[
      Math.floor(Math.random() * this.workers.length)
    ]
    worker.postMessage(task)
  }
}
