import {
  Wallet, TrendingUp, Receipt, PieChart, Gauge, Target, FileBarChart, Eye, Zap, LineChart,
  Droplets, LayoutDashboard, Users, Link2, RefreshCw, Lightbulb, ShieldCheck, Ruler,
  Building2, Briefcase, ClipboardCheck, Handshake, Mail, MapPin, Linkedin, CircleDot,
  Database, Plug, Lock,
  type LucideIcon,
} from "lucide-react";

// Names usable in front matter as `icon: <name>`. Unknown names fall back to a dot.
const ICONS: Record<string, LucideIcon> = {
  wallet: Wallet, "trending-up": TrendingUp, receipt: Receipt, "pie-chart": PieChart,
  gauge: Gauge, target: Target, report: FileBarChart, eye: Eye, zap: Zap, "line-chart": LineChart,
  droplets: Droplets, dashboard: LayoutDashboard, users: Users, link: Link2, refresh: RefreshCw,
  lightbulb: Lightbulb, shield: ShieldCheck, ruler: Ruler, building: Building2, briefcase: Briefcase,
  audit: ClipboardCheck, handshake: Handshake, database: Database, plug: Plug, lock: Lock, mail: Mail, "map-pin": MapPin, linkedin: Linkedin,
};

export function Icon({ name, className }: { name?: string; className?: string }) {
  const C = (name && ICONS[name]) || CircleDot;
  return <C className={className} aria-hidden="true" strokeWidth={1.75} />;
}
