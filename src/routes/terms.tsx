import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/Legal";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => seo("Terms & Conditions", "The terms that apply to your use of the Varun Advocates website."),
  component: () => (
    <LegalPage title="Terms & Conditions" updated="October 2026" sections={[
      { h: "Acceptance", p: "By using this website you agree to these terms and to the disclaimer shown on your first visit." },
      { h: "Information only", p: "All content is general information and not legal advice.", items: ["No advocate-client relationship is created by using this site", "Do not act on any content without professional advice"] },
      { h: "Bookings", p: "Appointment requests are subject to confirmation by our office.", items: ["We may reschedule if an advocate is unavailable", "Please arrive on time for in-person consultations"] },
      { h: "Intellectual property", p: "Text, logos and design on this site belong to Varun Advocates and may not be reused without permission." },
      { h: "Governing law", p: "These terms are governed by the laws of India, with courts in Bengaluru having exclusive jurisdiction." },
    ]} />
  ),
});
