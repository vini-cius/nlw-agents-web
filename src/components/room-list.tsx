import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useRooms } from '@/http/use-rooms'
import { dayjs } from '@/lib/dayjs'

import { ArrowRightIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

export function RoomList() {
  const { data, isLoading } = useRooms()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
        <CardDescription>
          Acesso rápido para as salas mais recentes
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        {isLoading && <p className="text-muted-foreground text-sm">Loading...</p>}

        {
          data?.rooms.map((room) => (
            <Link to={`/room/${room.id}`} key={room.id} className="border hover:bg-accent/50 flex items-center p-3 rounded-lg justify-between">
              <div className='flex-1 flex flex-col gap-1'>
                <h3 className="font-medium">{room.name}</h3>

                <div className='flex items-center gap-2'>
                  <Badge variant="secondary" className='text-xs'>
                    {dayjs(room.createdAt).fromNow()}
                  </Badge>

                  <Badge variant="secondary" className='text-xs'>
                    {room.questionsCount} pergunta(s)
                  </Badge>
                </div>
              </div>

              <span className='flex text-sm gap-1 items-center'>Entrar <ArrowRightIcon className='size-3' /></span>
            </Link>
          ))
        }
      </CardContent>
    </Card>
  )
}
