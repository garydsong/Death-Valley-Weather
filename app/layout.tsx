import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Weather from '@/components/Weather'
const moment = require('moment-timezone');


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Death Valley Weather',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentHour:string = moment.tz("America/Los_Angeles").format('HH');
  const testHour = 9

  return (
    <html lang="en">
      <header>
        <link href="https://fonts.googleapis.com/css2?family=Alike&family=DM+Sans:opsz,wght@9..40,100;9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </header>
      <body className={
        +testHour >= 19 || +testHour <= 6
        ? "bg-gradient-to-r from-black via-blue-900 to-black"
        : "bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400"
        }>
        <div className="flex justify-center items-center w-full h-full">
          <Weather></Weather>
        </div>
        <div className={
          +testHour >= 19 || +testHour <= 6
          ? "absolute top-50 right-50 w-72 h-72 bg-white rounded-full opacity-55 filter blur-2xl animate-blob"
          : "absolute top-50 right-50 w-72 h-72 bg-yellow-300 rounded-full opacity-55 filter blur-2xl animate-blob"
          }></div>
      </body>
    </html>
  )
}
