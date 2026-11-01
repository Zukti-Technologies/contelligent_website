import { getNavigation } from "@/lib/content";
import Logo from "./Logo";
import HeaderNav from "./HeaderNav";

export default function Header() {
  const nav = getNavigation();
  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white">
      <div className="container-site flex h-[72px] items-center justify-between gap-6">
        <Logo />
        <HeaderNav items={nav.main} ctas={nav.headerCtas} />
      </div>
    </header>
  );
}
