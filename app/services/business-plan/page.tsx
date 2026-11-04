import ServicePage from "@/components/ServicePage";
import { metaFrom } from "@/lib/seo";

export const metadata = metaFrom("services/business-plan", "/services/business-plan/");

export default function Page() {
  return <ServicePage file="services/business-plan" />;
}
