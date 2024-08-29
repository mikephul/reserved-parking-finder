import { AlertTriangleIcon } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AlertMessage() {
  return (
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
  )
}
