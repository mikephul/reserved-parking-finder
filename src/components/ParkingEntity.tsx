import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronsUpDown } from "lucide-react"
import { BankLogo } from "@/components/BankLogo"
import { LocateIcon } from "@/components/icons/LocateIcon"
import { CreditCardIcon } from "@/components/icons/CreditCardIcon"
import { creditCards, Parking } from "@/data/data"

type ParkingEntityProps = {
  parking: Parking
}

export default function ParkingEntity({ parking }: ParkingEntityProps) {
  const { entity, location, spotsAvailable, cards } = parking

  return (
    <Collapsible>
      <Card>
        <CardContent className='p-3 pt-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <BankLogo id={entity} />
              <div>
                <p className='text-sm font-medium leading-none'>
                  {entity.toUpperCase()}
                </p>
                {/* <p className='text-sm text-muted-foreground'>
                  {spotsAvailable} spots
                </p> */}
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-2'>
                <LocateIcon className='h-4 w-4 text-muted-foreground' />
                <span className='text-sm text-muted-foreground'>
                  {location}
                </span>
              </div>
              <CollapsibleTrigger asChild>
                <Button variant='ghost' size='sm' className='w-9 p-0'>
                  <ChevronsUpDown className='h-4 w-4' />
                  <span className='sr-only'>Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
          </div>
          <CollapsibleContent>
            <div className='mt-4 mb-4'>
              <span className='text-sm text-muted-foreground'>
                Eligible Credit Cards
              </span>
            </div>
            <div className='grid gap-6 md:grid-cols-3 lg:grid-cols-4 pl-2'>
              {cards.map((cardId) => {
                const card = creditCards.find((card) => card.id === cardId)
                return (
                  card && (
                    <div key={cardId} className='flex items-center gap-4'>
                      <CreditCardIcon width={64} color={card.color} />
                      <div>{card.name}</div>
                    </div>
                  )
                )
              })}
            </div>
          </CollapsibleContent>
        </CardContent>
      </Card>
    </Collapsible>
  )
}
