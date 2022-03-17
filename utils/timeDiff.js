export function timeDiff(startTime) {
  const start = new Date(startTime)
  const end = new Date()
  const diff = end.getTime() - start.getTime()
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24))
  const diffHours = Math.floor(diff / (1000 * 60 * 60))
  const diffMonths = Math.floor(diffDays / 30)
  if (diffDays < 1) {
    return `更新於${diffHours}小時前`
  }
  if (diffDays < 30) {
    return `更新於${diffDays}天前`
  }
  return `更新於${diffMonths}個月前`
}
