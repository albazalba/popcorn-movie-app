import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";


function Header() {
    return (
        <header className="flex flex-col sm:flex-row justify-between m-5 items-center">
            <div className="flex flex-grow max-w-2xl justify-evenly ">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </div>
            <Image 
                className="object-contain"
                src="https://links.papareact.com/ua6"
                width={200}
                height={100} />

        </header>
    )
}

export default Header

