function calculate(start, end, cores) {
  const range = end - start;
  const step = ~~(range / cores)
  let output = []
  for (let i = start; i < end; i += step) {
    output.push({
      start: i,
      end: Math.min(i + step, end)
    })
  }
  const extra = output.slice(cores).map(wl => wl.end).reduce((a,b) => a + b, 0)
  console.log(extra)
  output = output.slice(0, cores)
  if (extra / end >= 1) {
    output[cores - 1].end = end;
  }
  return output
}
