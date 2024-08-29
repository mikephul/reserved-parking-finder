import { useState, useEffect } from "react"
import { CreditCard, cardToMalls } from "@/data/data"
import CardSelector from "@/components/CardSelector"
import MallEntity from "@/components/MallEntity"

export default function CardTab({ initialCard }: { initialCard: CreditCard }) {
  const [selectedCard, setSelectedCard] = useState<CreditCard>(initialCard)
  const [mallsForCard, setMallsForCard] = useState(cardToMalls[initialCard.id])

  useEffect(() => {
    setMallsForCard(cardToMalls[selectedCard.id])
  }, [selectedCard])

  return (
    <>
      <div className='flex items-center justify-between mb-4'>
        <div className='text-lg font-medium'>Find Reserved Parking for</div>
      </div>

      <div className='max-w-md mx-auto mb-6'>
        <CardSelector
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      </div>

      <div className='mb-4'>
        <div className='text-sm text-muted-foreground'>
          The selected card has reserved parking at the following malls
        </div>
      </div>

      <div className='grid grid-cols-1 gap-4 mb-8'>
        {mallsForCard.map((mall) => (
          <MallEntity key={mall.id} mall={mall} />
        ))}
      </div>
    </>
  )
}
