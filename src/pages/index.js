export default function HomeRedirect() {
  if (typeof window !== `undefined`) window.location.href = '/unternehmen'
  return null
}
