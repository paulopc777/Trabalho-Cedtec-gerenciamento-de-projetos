import '../style/globals.css'
import { Bebas_Neue } from 'next/font/google'


const Bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: 'Horizon Cassino',
  description: 'Onde a Sorte Encontra o Infinito do Entretenimento!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={Bebas.className} >{children}</body>
    </html>
  )
}
