import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { creditCards, CreditCard } from "@/data/data"
import { CreditCardIcon } from "@/components/icons/CreditCardIcon"

interface CardSelectorProps {
  selectedCard: CreditCard
  setSelectedCard: (card: CreditCard) => void
}

export default function CardSelector({
  selectedCard,
  setSelectedCard,
}: CardSelectorProps) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-full justify-between overflow-hidden text-ellipsis whitespace-nowrap'
        >
          {selectedCard ? (
            <div className='flex items-center gap-2'>
              <CreditCardIcon width={20} color={selectedCard.color} />
              {selectedCard.name}
            </div>
          ) : (
            "Select a credit card..."
          )}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full p-0'>
        <Command>
          <CommandInput placeholder='Search credit card...' />
          <CommandList>
            <CommandEmpty>No card found.</CommandEmpty>
            <CommandGroup>
              {creditCards.map((card) => (
                <CommandItem
                  key={card.id}
                  value={card.name}
                  onSelect={() => {
                    setSelectedCard(card)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedCard?.name === card.name
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  <CreditCardIcon
                    width={20}
                    color={card.color}
                    className='mr-2'
                  />
                  {card.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
