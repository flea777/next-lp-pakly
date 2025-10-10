import { dynaPuff } from "@/lib/fonts";
import { Button } from "../ui/button";

interface NavBarProps {
  title: string;
  href: string;
  class?: string;
}

export function Header() {
  const navBarData: NavBarProps[] = [
    { title: "Início", href: "#" },
    { title: "Serviços", href: "#" },
    { title: "Planos", href: "#" },
  ];

  return (
    <header className="flex py-6 px-16">
      <div className="flex justify-between rounded-2xl w-7xl p-4 bg-white">
        <h2 className={`text-2xl ${dynaPuff.className} text-primary`}>pakly!</h2>
        <div className="flex gap-2">
          {navBarData.map((item, idx) => (
            <Button key={idx} variant={"ghost"}>{item.title}</Button>
          ))}
        </div>
        <div>
          <Button variant={"default"} className="bg-sidebar-primary">Assine agora!</Button>
        </div>
      </div>
    </header>
  );
}
