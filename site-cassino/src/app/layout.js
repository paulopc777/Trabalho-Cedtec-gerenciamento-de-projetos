import '../style/globals.css'

export const metadata = {
  title: 'Horizon Cassino',
  description: 'Onde a Sorte Encontra o Infinito do Entretenimento!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body >{children}</body>
    </html>
  )
}
