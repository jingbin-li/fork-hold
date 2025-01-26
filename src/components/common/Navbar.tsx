import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BadgeHelp, Dices, House, User } from "lucide-react";
import Link from "next/link";

export default function Navbar({ activeValue }: { activeValue: string }) {
  const tabs = [
    {
      label: "Home",
      value: "home",
      href: "/",
      svg: <House />,
    },
    {
      label: "Eat",
      value: "eat",
      href: "/eat",
      svg:<Dices />,
    },
    {
      label: "Help",
      value: "help",
      href: "/help",
      svg: <BadgeHelp />
    },
    {
      label: "User",
      value: "user",
      href: "/user",
      svg: <User />
    },
  ];

  return (
    <nav className="navbar">
      <Tabs defaultValue={activeValue} className="w-[100%] fixed bottom-0">
        <TabsList className="flex justify-evenly py-2 h-[100%]">
          {tabs.map((x, i) => (
            <TabsTrigger key={i} className="w-[63px] flex flex-col" value={x.value}>
              {x.svg}
              <Link href={x.href}>{x.label}</Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </nav>
  );
}
