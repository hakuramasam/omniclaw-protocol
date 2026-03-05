export function dynamicPrice(complexity: number, load: number) {
  const base = 10000
  const demandMultiplier = 1 + load / 100
  return base * complexity * demandMultiplier
}
