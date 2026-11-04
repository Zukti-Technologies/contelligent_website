import ServicePage from "@/components/ServicePage";
import { metaFrom } from "@/lib/seo";

export const metadata = metaFrom("services/financial-data-associate", "/services/financial-data-associate/");

export default function Page() {
  return <ServicePage file="services/financial-data-associate" />;
}
