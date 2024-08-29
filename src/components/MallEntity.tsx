import { Card, CardContent } from "@/components/ui/card"
import { LocateIcon } from "@/components/icons/LocateIcon"
import { MapPin } from "lucide-react"

type MallEntityProps = {
  mall: { id: string; name: string; location: string }
}

export default function MallEntity({ mall }: MallEntityProps) {
  const { name, location } = mall

  return (
    <Card>
      <CardContent className='p-3 pt-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <MapPin className='h-4 w-4' />
            <div className='text-md font-medium'>{name}</div>
          </div>
          <div className='flex items-center gap-2'>
            <LocateIcon className='h-4 w-4 text-muted-foreground' />
            <span className='text-sm text-muted-foreground'>{location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
