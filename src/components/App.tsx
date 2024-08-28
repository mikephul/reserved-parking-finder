"use client"

import { useState, useEffect } from "react"
import { malls, mallToParkingEntities, Mall } from "@/data/data"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MallSelector from "@/components/MallSelector"
import ParkingEntity from "@/components/ParkingEntity"
import { AlertTriangleIcon } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function App() {
  const [selectedMall, setSelectedMall] = useState<Mall>(malls[0])
  const [parkingEntities, setParkingEntities] = useState(
    mallToParkingEntities[malls[0].id]
  )

  useEffect(() => {
    setParkingEntities(
      selectedMall ? mallToParkingEntities[selectedMall.id] : []
    )
  }, [selectedMall])

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Header />

      <main className='flex-grow container mx-auto px-4 pt-2'>
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

        <Alert variant='default'>
          <AlertTriangleIcon className='h-4 w-4' />
          <AlertDescription>
            The data on this website is based on personal experience and online
            research, so some information may be incorrect or incomplete. Please
            help improve it by{" "}
            <a
              href='https://forms.gle/D5Tw82xosV6JSWRk7'
              className='font-medium underline hover:text-primary'
              target='_blank'
              rel='noopener noreferrer'
            >
              submitting any corrections here
            </a>
            .
          </AlertDescription>
        </Alert>
      </main>

      <Footer />
    </div>
  )
}
