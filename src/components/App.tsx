"use client"

import { malls, creditCards } from "@/data/data"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AlertMessage from "@/components/AlertMessage"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MallTab from "@/components/MallTab"
import CardTab from "@/components/CardTab"
import { MapPin, CreditCard } from "lucide-react"

export default function App() {
  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Header />

      <main className='flex-grow container mx-auto px-4 pt-2'>
        <Tabs defaultValue='mall' className='max-w-md mx-auto'>
          <TabsList className='grid w-full grid-cols-2 mb-8'>
            <TabsTrigger value='mall'>
              <MapPin className='h-4 w-4 mr-2' />
              Search by Mall
            </TabsTrigger>
            <TabsTrigger value='card'>
              <CreditCard className='h-4 w-4 mr-2' />
              Search by Card
            </TabsTrigger>
          </TabsList>
          <TabsContent value='mall'>
            <MallTab initialMall={malls[0]} />
          </TabsContent>
          <TabsContent value='card'>
            <CardTab initialCard={creditCards[0]} />
          </TabsContent>
          <AlertMessage />
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
