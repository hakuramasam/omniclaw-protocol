export function selectChain(load: number) {
  if (load > 70) return "monad"
  return "base"
}
