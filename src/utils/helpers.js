export function formatReadingTime(minutes) {
  if (minutes > 1) {
    return `${minutes} minutes`
  }

  return `${minutes} minute`
}
