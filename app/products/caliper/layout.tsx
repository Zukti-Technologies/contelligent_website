import SubNav from "@/components/SubNav";
import { getPage, type NavLink } from "@/lib/content";

export default function CaliperLayout({ children }: { children: React.ReactNode }) {
  const { data } = getPage<{ subnav: NavLink[]; subnavActions?: NavLink[] }>("caliper/caliper");
  // .theme-caliper switches the colour tokens to Caliper teal + mint for every page under /products/caliper.
  return (
    <div className="theme-caliper bg-white text-ink-800">
      <SubNav title="Caliper" logo="/images/caliper-logo.svg" base="/products/caliper/" items={data.subnav} actions={data.subnavActions ?? []} />
      {children}
    </div>
  );
}
