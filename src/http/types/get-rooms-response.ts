export type GetRoomsResponse = {
  rooms: {
    id: string
    name: string
    description: string
    createdAt: string
    questionsCount: number
  }[]
}
