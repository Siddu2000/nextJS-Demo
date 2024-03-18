import "./styles.css" 

// import "../app/styles.css"
export default function RootLayout({
  children ,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <header  className="p-10">
<h1>Header</h1>
</header>
        {children}
        <footer  className="p-4" >
<h2>Footer</h2>
        </footer>
        </body>
    </html>
  )
}
