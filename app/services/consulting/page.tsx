import ServicePage from "@/components/ServicePage";
import { metaFrom } from "@/lib/seo";

export const metadata = metaFrom("services/consulting", "/services/consulting/");

export default function Page() {
  return <ServicePage slug="consulting" />;
}
