import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import ThemeDropdown from "@/components/ThemeDropdown"

export default function Header() {
  return (
    <header className='py-5'>
      <div className='container mx-auto px-4 flex items-center justify-end'>
        <Button variant='ghost' size='icon' asChild>
          <a
            href='https://github.com/mikephul/reserved-parking-finder'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Github className='h-4 w-4' />
          </a>
        </Button>
        <ThemeDropdown />
      </div>
    </header>
  )
}
