import { ref, onMounted } from 'vue'
import { profile } from '../data/portfolio'

const API_BASE = 'https://alfa-leetcode-api.onrender.com'

export function useLeetCodeStats() {
  const stats = ref(null)
  const recentSubmissions = ref([])
  const loading = ref(true)
  const error = ref(null)

  onMounted(async () => {
    const username = profile.leetcodeUsername

    try {
      const [solvedRes, submissionsRes] = await Promise.all([
        fetch(`${API_BASE}/${username}/solved`),
        fetch(`${API_BASE}/${username}/acSubmission`),
      ])

      if (!solvedRes.ok) throw new Error('Failed to fetch LeetCode stats')

      const solvedData = await solvedRes.json()
      const submissionsData = submissionsRes.ok ? await submissionsRes.json() : { submission: [] }

      stats.value = {
        total: solvedData.solvedProblem,
        easy: solvedData.easySolved,
        medium: solvedData.mediumSolved,
        hard: solvedData.hardSolved,
        acceptance: solvedData.acSubmissionNum,
      }

      recentSubmissions.value = (submissionsData.submission || []).slice(0, 5)
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  })

  return { stats, recentSubmissions, loading, error }
}
