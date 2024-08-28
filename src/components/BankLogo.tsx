import banks from "@/constant/banks.json"
import Image from "next/image"

export function BankLogo({ id }: { id: string }) {
  return (
    <div
      className='w-8 h-8 rounded-lg overflow-hidden'
      style={{ backgroundColor: banks[id as keyof typeof banks].color }}
    >
      <Image
        src={`/images/banks/${id}.svg`}
        width={32}
        height={32}
        alt={id}
        className='w-full h-full object-cover p-1'
      />
    </div>
  )
}
