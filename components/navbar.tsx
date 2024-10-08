import { getCategories } from '@/actions/get-categories'
import Link from 'next/link'
import { NavbarActions } from './navbar-actions'
import { Container } from './ui/container'
import avatarImg  from "@/public/next.svg"
import Image from 'next/image'


// Navbar component with a responsive design based on the Figma layout
export const Navbar = async () => {
  const categories = await getCategories()

  return (
    <div className="bg-dark mx-[100px]">
      <Container>
        {/* Navbar container with padding and centering */}
        <div className="flex h-[100px] justify-between items-center px-4 sm:px-6 lg:px-8">

          {/* Logo placeholder - replace with the actual logo image */}
          <Link href="/" className="flex items-center">
            <Image
              className="w-[70px] h-[67px]"
              src="/svg/logo.svg"
              alt="Logo"
              width={70}
              height={67}
            />
          </Link>

          {/* Main navigation centered - Figma code for links */}
          <div className="flex justify-center items-center gap-[172px]">
            <div className="flex justify-start items-start gap-[30px]">
              <Link href="/" className="text-white text-xs font-black font-['Poppins']">Home</Link>
              <Link href="/categories" className="text-white text-xs font-black font-['Poppins']">Categories</Link>
              <Link href="/shop" className="text-white text-xs font-black font-['Poppins']">Shop</Link>
              <Link href="/contact" className="text-white text-xs font-black font-['Poppins']">Contact Us</Link>
            </div>
          </div>

          {/* Navbar actions (e.g. cart, account) */}
          <div className="flex items-center gap-6">
            <NavbarActions />
            <Link href="/" className="flex items-center">
              <img
                className="w-[70px] h-[67px]"
                src="/svg/avatar.svg"
                alt="avatarImg"
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
