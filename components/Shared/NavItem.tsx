import { naviTemData } from '@/public/data/navData'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavItem() {
    const path = usePathname()
    return (
        <>
            {
                naviTemData.map((navItemSingle) => (
                    <li className="dropdown show-dropdown" key={navItemSingle.id}>
                        <Link className={`navunik ${path == navItemSingle.href && 'active'}`} href={navItemSingle.href}>{navItemSingle.linkText}</Link>
                    </li>
                ))
            }
        </>
    )
}
