import { Noto_Sans_Mono } from "next/font/google"
import Link from "next/link"

const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-noto-sans-mono",
})

export default function Footer() {
  return (
    <footer className='py-4'>
      <div
        className={`container mx-auto px-4 text-center text-sm text-muted-foreground ${notoSansMono.className}`}
      >
        © 2024 Made with{" "}
        <Link
          href='https://v0.dev'
          className='font-medium text-primary hover:underline'
        >
          v0
        </Link>
        .
      </div>
    </footer>
  )
}
