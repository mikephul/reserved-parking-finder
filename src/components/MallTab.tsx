import { useState, useEffect } from "react"
import { Mall, mallToParkingEntities } from "@/data/data"
import MallSelector from "@/components/MallSelector"
import ParkingEntity from "@/components/ParkingEntity"

export default function MallTab({ initialMall }: { initialMall: Mall }) {
  const [selectedMall, setSelectedMall] = useState<Mall>(initialMall)
  const [parkingEntities, setParkingEntities] = useState(
    mallToParkingEntities[initialMall.id]
  )

  useEffect(() => {
    setParkingEntities(
      selectedMall ? mallToParkingEntities[selectedMall.id] : []
    )
  }, [selectedMall])

  return (
    <>
      <div className='flex items-center justify-between mb-4'>
        <div className='text-lg font-medium'>Find Reserved Parking at</div>
      </div>

      <div className='max-w-md mx-auto mb-6'>
        <MallSelector
          selectedMall={selectedMall}
          setSelectedMall={setSelectedMall}
        />
      </div>

      <div className='mb-4'>
        <div className='text-sm text-muted-foreground'>
          Eligible bank credit cards for reserved parking
        </div>
      </div>

      <div className='grid grid-cols-1 gap-4 mb-8'>
        {parkingEntities.map((parking) => (
          <ParkingEntity key={parking.entity} parking={parking} />
        ))}
      </div>
    </>
  )
}
