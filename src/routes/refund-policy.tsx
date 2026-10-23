import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/Legal";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/refund-policy")({
  head: () => seo("Refund Policy", "Placeholder refund policy for consultation bookings made with Vidyacharan Advocates."),
  component: () => (
    <LegalPage title="Refund Policy" updated="October 2026" sections={[
      { h: "Scope", p: "This placeholder policy applies to consultation fees paid through this website." },
      { h: "Cancellations", p: "Please let us know as early as possible if you need to cancel.", items: ["Contact our office by phone or email", "Quote your name, date and time slot"] },
      { h: "Rescheduling", p: "Where possible we will offer a new slot instead of a refund.", items: ["Subject to advocate availability", "Rescheduling requests are handled in order received"] },
      { h: "Processing", p: "Approved refunds are returned to the original payment method." },
      { h: "Questions", p: "For any questions about this policy, please reach us through the Contact page." },
    ]} />
  ),
});
