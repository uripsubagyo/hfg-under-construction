import './globals.css'
import type { Metadata } from 'next'
import iconss from "@/app/favicon.ico"
import { Inter, Philosopher } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'Hindu For Generation 17',
  description: "Hindu for Generation (HFG) Hindu For Generation adalah acara unggul terbesar yang diadakan oleh Keluarga Mahasiswa Hindu Dharma Indonesia. Tujuan dasar dari diadakannya HFG ini pada mulanya untuk mempererat tali persaudaraan antara Keluarga Mahasiswa Hindu Dharma universitas lainnya. Timbulnya kebersamaan selama acara berlangsung menggerakan hati untuk lebih bersemangat lagi dalam memfasilitasi HFG",
  icons:{
    icon:'/logo.png',
    apple:'/logo.png'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" sizes="any" type='png'/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
