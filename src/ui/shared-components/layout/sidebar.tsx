import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { PiHouse, PiSpiral } from "react-icons/pi";
import { cn } from "../utils/cn";
// import UserIconWithSignout from "./UserIconWithSignout";

function isBaselinesV2Enabled() {
  return process.env.NEXT_PUBLIC_ENABLE_BASELINES_V2 === "true";
}

const navigation = [
  { name: "Users", href: "/", icon: PiHouse, current: false },
  {
    name: "Companies",
    href: "/companies",
    icon: PiSpiral,
    current: false,
  },
];

export default function Sidebar() {
  const router = useRouter();
  const currentPath = router.pathname;
  navigation.forEach((nav) => {
    // Every URL starting with "/" so we need a special check to ensure its the home page
    if (nav.href === "/") {
      nav.current = currentPath === nav.href;
    } else {
      nav.current = currentPath === nav.href;
    }
  });

  return (
    <div className="fixed left-4 h-screen flex grow flex-col items-center gap-y-8 overflow-y-auto py-8 w-20 z-20">
      <div className="">
        <Link href="/">
          <Image
            src="/curebase-logo.png"
            alt="logo"
            width={180}
            height={38}
            priority
          />
        </Link>
      </div>
      <nav className="flex flex-1 flex-col justify-between">
        <ul className="space-y-4">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  item.current ? "text-black" : " text-slate-500",
                  "group flex flex-col items-center gap-x-3 rounded-md py-2 text-sm leading-6 font-semibold hover:cursor-pointer"
                )}
              >
                <item.icon size={24} strokeWidth={2} />
                <span className="text-xs/6">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* <ul className="flex justify-center">
          <li>
            <UserIconWithSignout />
          </li>
        </ul> */}
      </nav>
    </div>
  );
}
