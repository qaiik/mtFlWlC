function calculate(start, end, cores) {
  const start = start;
  const end = end;
  const range = end - start;
  const step = ~~(range / cores)
  const output = []
  for (let i = start; i < end; i += step) {
    output.push({
      start: i,
      end: Math.min(i + step, end)
    })
    }
    return output
    }
