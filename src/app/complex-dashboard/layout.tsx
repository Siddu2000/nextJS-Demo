export default function RootLayout({
    children ,
    users,
    notification,
    revenue
  }: {
    children: React.ReactNode,
    users:React.ReactNode,
    notification:React.ReactNode,
    revenue:React.ReactNode,
  }) {
    return (
<div>
    {children}
    {users}
    {notification}
    {revenue}
</div>
    )
}