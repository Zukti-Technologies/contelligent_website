import { getNavigation, getSite } from "@/lib/content";
import HeaderClient from "./HeaderClient";

export default function Header() {
  return <HeaderClient nav={getNavigation()} logo={getSite().logo} />;
}
