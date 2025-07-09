export type GetRoomQuestionsResponse = {
  questions: Array<{
    id: string
    question: string
    answer: string
    createdAt: string
  }>
}
