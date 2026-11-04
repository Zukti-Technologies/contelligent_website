import ServicePage from "@/components/ServicePage";
import { metaFrom } from "@/lib/seo";

export const metadata = metaFrom("services/customisation", "/services/customisation/");

export default function Page() {
  return <ServicePage file="services/customisation" />;
}
