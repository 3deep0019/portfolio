import { ref, computed, onMounted } from 'vue'
import { profile } from '../data/portfolio'

const ALFA_API = 'https://alfa-leetcode-api.onrender.com'
const GRAPHQL_URL = 'https://leetcode.com/graphql'

const USER_QUERY = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
      }
      userCalendar {
        totalActiveDays
        streak
      }
    }
  }
`

function parseSubmissionStats(acSubmissionNum) {
  const getCount = (difficulty) =>
    acSubmissionNum.find((item) => item.difficulty === difficulty)?.count ?? 0

  return {
    total: getCount('All'),
    easy: getCount('Easy'),
    medium: getCount('Medium'),
    hard: getCount('Hard'),
  }
}

async function fetchFromGraphQL(username) {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: USER_QUERY,
      variables: { username },
    }),
  })

  if (!response.ok) throw new Error('GraphQL request failed')

  const payload = await response.json()
  const user = payload?.data?.matchedUser

  if (!user) throw new Error('LeetCode user not found')

  return {
    totalActiveDays: user.userCalendar?.totalActiveDays ?? null,
    streak: user.userCalendar?.streak ?? null,
    solved: parseSubmissionStats(user.submitStats.acSubmissionNum),
  }
}

async function fetchFromAlfa(username) {
  const [solvedRes, calendarRes] = await Promise.all([
    fetch(`${ALFA_API}/${username}/solved`),
    fetch(`${ALFA_API}/${username}/calendar`),
  ])

  if (!solvedRes.ok) throw new Error('Alfa API rate limited')

  const solvedData = await solvedRes.json()
  const calendarData = calendarRes.ok ? await calendarRes.json() : {}

  return {
    totalActiveDays: calendarData.totalActiveDays ?? null,
    streak: calendarData.streak ?? null,
    solved: {
      total: solvedData.solvedProblem,
      easy: solvedData.easySolved,
      medium: solvedData.mediumSolved,
      hard: solvedData.hardSolved,
    },
  }
}

export function useLeetCodeCalendar() {
  const loading = ref(true)
  const error = ref(null)
  const stats = ref(null)

  const solved = computed(() => stats.value?.solved ?? null)

  const difficultyStats = computed(() => {
    if (!solved.value) return []
    return [
      { label: 'Easy', count: solved.value.easy, total: 900, color: 'bg-emerald-500', text: 'text-emerald-500' },
      { label: 'Medium', count: solved.value.medium, total: 1900, color: 'bg-amber-500', text: 'text-amber-500' },
      { label: 'Hard', count: solved.value.hard, total: 900, color: 'bg-red-500', text: 'text-red-500' },
    ]
  })

  onMounted(async () => {
    const username = profile.leetcodeUsername

    try {
      stats.value = await fetchFromGraphQL(username)
    } catch {
      try {
        stats.value = await fetchFromAlfa(username)
      } catch (err) {
        error.value = err.message
      }
    } finally {
      loading.value = false
    }
  })

  return { loading, error, stats, solved, difficultyStats }
}
