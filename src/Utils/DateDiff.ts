export function DateDiff(date1: Date, date2: Date): string {
  const diff = Math.abs(date1.getTime() - date2.getTime())

  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)

  return [hours, minutes % 60, seconds % 60].map((value) => value.toString().padStart(2, '0')).join(':')
}