import { Icon } from "@/lib/icons";
import SmartLink from "./SmartLink";

export type Feature = {
  title: string;
  kicker?: string;      // small label above the title, e.g. "Built for"
  tagline?: string;
  body?: string;
  icon?: string;
  badge?: string;
  href?: string;
  cta?: string;
  highlight?: boolean;  // dark, raised card used to draw attention to one item in a set
};

/** Reusable card for product features, benefits, audiences, services and offerings. */
export default function FeatureCard({
  feature, index, variant = "default",
}: { feature: Feature; index?: number; variant?: "default" | "muted" }) {
  const hi = Boolean(feature.highlight);
  const muted = !hi && (variant === "muted" || Boolean(feature.badge));

  const iconCls = hi ? "bg-white/10 text-mint-300" : muted ? "bg-ink-100/60 text-ink-600" : "bg-mint-50 text-mint-700";
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className={`flex h-11 w-11 items-center justify-center rounded-lg ${iconCls}`}>
          <Icon name={feature.icon} className="h-5 w-5" />
        </span>
        <div className="flex items-center gap-2">
          {feature.badge && (
            <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${hi ? "bg-mint-500 text-ink-900" : "border border-ink-100 bg-paper text-ink-600"}`}>
              {feature.badge}
            </span>
          )}
          {typeof index === "number" && (
            <span className={`font-display text-sm font-semibold tabular-nums ${hi ? "text-mint-300" : "text-ink-300"}`}>{String(index + 1).padStart(2, "0")}</span>
          )}
        </div>
      </div>
      {feature.kicker && <p className={`mt-5 text-xs font-semibold ${hi ? "text-mint-300" : "text-mint-700"}`}>{feature.kicker}</p>}
      <h3 className={`${feature.kicker ? "mt-1" : "mt-5"} text-lg font-semibold ${hi ? "text-white" : ""}`}>{feature.title}</h3>
      {feature.tagline && <p className={`mt-1.5 text-[15px] font-semibold ${hi ? "text-mint-300" : "text-mint-700"}`}>{feature.tagline}</p>}
      {feature.body && <p className={`mt-2 text-[15px] leading-relaxed ${hi ? "text-ink-100" : "text-ink-600"}`}>{feature.body}</p>}
      {feature.href && feature.cta && <p className={`mt-4 text-sm font-semibold ${hi ? "text-mint-300" : "text-mint-700"}`}>{feature.cta} →</p>}
    </>
  );

  const base = "group flex h-full flex-col rounded-2xl p-6 transition-shadow";
  const skin = hi
    ? "relative bg-gradient-to-b from-ink-700 to-ink-900 shadow-xl shadow-ink-900/25 ring-1 ring-mint-500/30 lg:-translate-y-2"
    : `border border-ink-100 bg-white ${feature.href ? "hover:border-mint-300 hover:shadow-md" : ""}`;
  const cls = `${base} ${skin}`;
  return feature.href ? <SmartLink href={feature.href} className={cls}>{content}</SmartLink> : <div className={cls}>{content}</div>;
}
