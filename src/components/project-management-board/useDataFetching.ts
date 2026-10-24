import { useState, useEffect } from 'react'

function useDataFetching<T>(dataSource: string): [boolean, string, T[]] {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(dataSource)
        const result = (await response.json()) as T[]

        if (result) {
          setData(result)
          setLoading(false)
        }
      } catch (e) {
        setLoading(false)
        setError(e instanceof Error ? e.message : String(e))
      }
    }

    fetchData()
  }, [dataSource])

  return [loading, error, data]
}

export default useDataFetching
