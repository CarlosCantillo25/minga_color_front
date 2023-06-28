
import Display from "./Display"
export default function NavBar() {
  return (
    <nav className='flex justify-between h-[12vh]'>
      <Display/>
      <img className='md:hidden h-7 mr-7 mt-6' src="/public/menu2.png" alt="menu2" />
      <img className='max-md:hidden h-7 mr-7 mt-6' src="/public/Logo.png" alt="logo" />
    </nav>
  )
}
