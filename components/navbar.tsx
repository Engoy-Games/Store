import { getCategories } from '@/actions/get-categories'
import Link from 'next/link'
import { NavbarActions } from './navbar-actions'
import { Container } from './ui/container'
import avatarImg  from "@/public/next.svg"


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
            <img
              className="w-[70px] h-[67px]"
              src="https://s3-alpha-sig.figma.com/img/437b/74bc/caab9fb4ea2512393b925150cf164e49?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ceiXvPc7oHzwpZ0uyW7Hf1URW77b144JOJC-I3QqaBIR6tcD9r25Ar7AEApDCH0lqvlAfZk-wJHMFlGZq7cS0NF5EDCKwxb78Yt5aW~hitAU95n4QuPKc2qs5PVfQvJUd7dIYjZCyh8cQIDdih3eRChO6B2aY9qdBDfXvX-NiaN3sQoLnQzJJ268ZasB2SLP1St66D2-8J7J4xOGLNTJG1KX0piiOIjhZ~eDOLyZOzL7sLRf6CGeB~eRCybqi4fW50F2nxPIuRMsc8rWuSwNi5AmpclxZKpMbbgL8Li62cqbRRetjY3bcLQ1tQZBfbWu39ULmOolvxnYy0bAM2PCfA__"
              alt="Logo"
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
                src="https://s3-alpha-sig.figma.com/img/92ce/d544/990673666a54e86dfb382fef5c4d4969?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aDWalrNiKpEUpDzpngiFEg572EjJm7Okt2Ai5tufDEp~i9kflIDa40OmffT68EddsHUNHM3FKFqZe7rkLExykNoRnAiHRvlPN7ndSh6bwtiHGD5V~g09ugUJGOs3fO-lSFTMDP3o-4fcc5wFMpE26--ZaZZst72zuxOOI~KZQM6Bj-kho84~dTKuy6~DQFmdB7QCq6ccv3yR~a5xdvs7vA-BbtDR7I5~BU7d8DjmYEkHvWaq9aeg7J0Ao9Nagn7t2me3GDPv-1PFo~pxy-nisIVLuDHvhk2ysU3wzr1utK~UKYz5msDcXJhDu6UDe12nrgUOWGO5~wipo72CzynUMQ__"
                alt="avatarImg"
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
