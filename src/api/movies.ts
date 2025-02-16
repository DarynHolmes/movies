import axios from 'axios'

const api = axios.create({
  baseURL: 'https://november7-730026606190.europe-west1.run.app/',
  timeout: 1000,
})

export interface Movie {
  id: string
  title: string
  description: string
  image_url: string
  rating: number
}

interface MoviesResponse {
  total: number
  items: Movie[]
}

interface GetMoviesParams {
  query?: string
  limit?: number
  skip?: number
}

export const getMovies = async (params: GetMoviesParams) => {
  const response = await api.get<MoviesResponse>('movies/', {
    params,
  })
  return response.data
}
