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
import { malls, Mall } from "@/data/data"

interface MallSelectorProps {
  selectedMall: Mall
  setSelectedMall: (mall: Mall) => void
}

export default function MallSelector({
  selectedMall,
  setSelectedMall,
}: MallSelectorProps) {
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
          {selectedMall
            ? malls.find((mall) => mall.id === selectedMall.id)?.name
            : "Select a mall..."}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full p-0'>
        <Command>
          <CommandInput placeholder='Search mall...' />
          <CommandList>
            <CommandEmpty>No mall found.</CommandEmpty>
            <CommandGroup>
              {malls.map((mall) => (
                <CommandItem
                  key={mall.id}
                  value={mall.name}
                  onSelect={() => {
                    setSelectedMall(mall)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedMall?.name === mall.name
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {mall.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
