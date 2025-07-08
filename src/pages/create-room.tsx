import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

type GetRoomsAPIResponse = {
  rooms: {
    id: string
    name: string
    description: string
  }[]
}

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const result: GetRoomsAPIResponse = await response.json()

      return result
    },
  })

  return (
    <div>
      <h1>create room</h1>

      {isLoading && <p>Loading...</p>}

      {data && (
        <div className="flex flex-col gap-1">
          {data.rooms.map((room) => (
            <Link
              key={room.id}
              to={`/room/${room.id}`}
            >
              {room.name} - {room.description}
            </Link>
          ))}
        </div>
      )}

      <Link className="underline" to="/room">
        go to room
      </Link>
    </div>
  )
}
