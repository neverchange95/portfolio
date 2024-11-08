"use client";

import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Lebenslauf",
        path: "/resume",
    },
    {
        name: "Projekte",
        path: "/work",
    },
    {
        name: "Kontakt",
        path: "/contact",
    },
];

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px]' />
            </SheetTrigger>
            <SheetContent>
                <SheetTitle />
                <SheetDescription />
                {/* logo */}
                <div className='mt-32 mb-40 text-center text-2xl'>
                    <Link href='/'>
                        <h1 className='text-4xl font-semibold'>
                            Michi<span className='text-accent'>.</span>
                        </h1>
                    </Link>
                </div>

                {/* nav */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={`${
                                    link.path === pathname && 
                                    "text-accent border-b-2 border-accent"
                                } text-xl capitalize hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav