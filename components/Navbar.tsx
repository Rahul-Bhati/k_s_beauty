import { ShoppingBag, Phone } from "lucide-react";
import Link from "next/link";
interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    href: string;
}

export default function Navbar() {
    return (
        <div className="w-full min-h-[70px] bg-[#312f30] overflow-hidden">
            <div className="px-6 py-4 md:px-10 md:py-6 flex justify-between items-center bg-[#323031]/20 backdrop-blur-lg">
                {/* Left Section */}
                <div className="flex items-center gap-x-6 md:gap-x-10 flex-wrap">
                    <NavItem icon={<ShoppingBag className="w-5 h-5 text-[#FFF4E9]" />} label="Collection" href="#collection" />
                    {/* <NavItem icon={User2} label="My Account" /> */}
                    {/* <NavItem icon={LifeBuoy} label="Support" /> */}
                    {/* <NavItem icon={UserPlus} label="Signup" />
                    <NavItem icon={LogIn} label="Login" /> */}
                </div>

                {/* Brand Name */}
                <div className="text-[#fff4e9] text-2xl md:text-3xl font-normal moon-dance-bold ">K. S Beauty</div>

                {/* Right Section */}
                <div className="flex items-center gap-x-6 md:gap-x-10 flex-wrap">
                    {/* <NavItem icon={ShoppingBag} label="Collection" /> */}
                    {/* <NavItem icon={Heart} label="Wishlist" />
                    <NavItem icon={ShoppingCart} label="Cart" /> */}
                    <NavItem icon={<Phone className="w-5 h-5 text-[#FFF4E9]" />} label="Contact" href="#contact" />
                </div>
            </div>
        </div>
    );
}

// Reusable Component for Nav Items
function NavItem({ icon, label, href }: NavItemProps) {
    return (
        <Link href={href} className="flex items-center gap-2">
            {/* <Icon className="w-5 h-5 text-[#FFF4E9]" /> */}
            {icon}
            <span className="text-[#fff4e9] text-lg font-medium font-['Mulish'] italic">{label}</span>
        </Link>
    );
}

