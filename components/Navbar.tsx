import { User2, LifeBuoy, LogIn, UserPlus, ShoppingBag, Heart, ShoppingCart, Phone } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full min-h-[70px] bg-[#312f30] overflow-hidden">
            <div className="px-6 py-4 md:px-10 md:py-6 flex justify-between items-center bg-[#323031]/20 backdrop-blur-lg">
                {/* Left Section */}
                <div className="flex items-center gap-x-6 md:gap-x-10 flex-wrap">
                <NavItem icon={ShoppingBag} label="Collection" href="#collection"/>
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
                    <NavItem icon={Phone} label="Contact" href="#contact"/>
                </div>
            </div>
        </div>
    );
}

// Reusable Component for Nav Items
function NavItem({ icon: Icon, label , href}: any) {
    return (
        <Link href={href} className="flex items-center gap-2">
            <Icon className="w-5 h-5 text-[#FFF4E9]" />
            <span className="text-[#fff4e9] text-lg font-medium font-['Mulish'] italic">{label}</span>
        </Link>
    );
}


// import { User2Icon } from "lucide-react";

// export default function Navbar() {
//     return (
//         <div className="w-full min-h-[70px] bg-[#312f30] overflow-hidden">
//             <div className="px-6 py-4 md:px-10 md:py-6 flex justify-between items-center bg-[#323031]/20 backdrop-blur-lg">
//                 {/* Left Section */}
//                 <div className="flex items-center gap-x-6 md:gap-x-10 flex-wrap">
//                     <NavItem icon={AccountIcon} label="My Account" />
//                     <NavItem icon={SupportIcon} label="Support" />
//                     <NavItem icon={SignupIcon} label="Signup" />
//                     <NavItem icon={LoginIcon} label="Login" />
//                 </div>

//                 {/* Brand Name */}
//                 <div className="text-[#fff4e9] text-2xl md:text-3xl font-normal font-['Italiana']">Jewel & Co.</div>

//                 {/* Right Section */}
//                 <div className="flex items-center gap-x-6 md:gap-x-10 flex-wrap">
//                     <NavItem icon={CollectionIcon} label="Collection" />
//                     <NavItem icon={WishlistIcon} label="Wishlist" />
//                     <NavItem icon={CartIcon} label="Cart" />
//                     <NavItem icon={ContactIcon} label="Contact" />
//                 </div>
//             </div>
//         </div>
//     );
// }

// // Reusable Component for Nav Items
// function NavItem({ icon: Icon, label }) {
//     return (
//         <div className="flex items-center gap-2">
//             <Icon className="w-5 h-5 text-[#FFF4E9]" />
//             <span className="text-[#fff4e9] text-sm font-medium font-['Mulish']">{label}</span>
//         </div>
//     );
// }

// // Sample Icons (Replace with actual SVG components)
// const AccountIcon = <User2Icon />;
// const SupportIcon = () => <svg>...</svg>;
// const SignupIcon = () => <svg>...</svg>;
// const LoginIcon = () => <svg>...</svg>;
// const CollectionIcon = () => <svg>...</svg>;
// const WishlistIcon = () => <svg>...</svg>;
// const CartIcon = () => <svg>...</svg>;
// const ContactIcon = () => <svg>...</svg>;
