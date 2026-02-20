import { useCountUp } from '@/hooks/useCountUp'

function parseMetric(value) {
  const match = value.match(/^([^0-9]*)([0-9.]+)(.*)$/)
  if (!match) return { prefix: '', number: 0, suffix: value, decimals: 0 }

  const numStr = match[2]
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0

  return {
    prefix: match[1],
    number: parseFloat(numStr),
    suffix: match[3],
    decimals,
  }
}

export function AnimatedMetric({ value, label }) {
  const { prefix, number, suffix, decimals } = parseMetric(value)
  const { count, ref } = useCountUp(number * Math.pow(10, decimals), 1500)

  const displayed = (count / Math.pow(10, decimals)).toFixed(decimals)

  return (
    <div ref={ref}>
      <p className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {prefix}{displayed}{suffix}
      </p>
      <p className="mt-1 font-body text-xs text-muted-foreground">
        {label}
      </p>
    </div>
  )
}
