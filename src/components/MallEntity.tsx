import { Card, CardContent } from "@/components/ui/card"
import { malls } from "@/data/data"
import { MapPin } from "lucide-react"
export default function MallEntity({ mallId }: { mallId: string }) {
  const mall = malls.find((m) => m.id === mallId)

  return (
    <Card>
      <CardContent className='p-3 pt-3'>
        <div className='flex items-center gap-2'>
          <MapPin className='h-4 w-4' />
          <div className='text-md font-medium'>{mall?.name}</div>
        </div>
      </CardContent>
    </Card>
  )
}
