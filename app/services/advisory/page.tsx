import ServicePage from "@/components/ServicePage";
import { metaFrom } from "@/lib/seo";

export const metadata = metaFrom("services/advisory", "/services/advisory/");

export default function Page() {
  return <ServicePage file="services/advisory" />;
}
