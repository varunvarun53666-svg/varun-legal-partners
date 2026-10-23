import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/Legal";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () => seo("Privacy Policy", "How Vidyacharan Advocates collects, uses and protects personal information shared through this website."),
  component: () => (
    <LegalPage title="Privacy Policy" updated="October 2026" sections={[
      { h: "Information we collect", p: "We collect only the information you choose to share with us.", items: ["Name, phone number and email address", "Details you provide in appointment or contact forms", "Basic usage data collected through cookies"] },
      { h: "How we use it", p: "Your information is used solely to respond to you and provide our services.", items: ["To schedule and confirm consultations", "To reply to your enquiries", "To improve this website"] },
      { h: "Cookies", p: "This site uses cookies to remember preferences, such as your acceptance of the disclaimer.", items: ["You can disable cookies in your browser settings", "Some features may not work without them"] },
      { h: "Sharing", p: "We do not sell or rent your personal information.", items: ["Information may be shared where required by law", "Service providers who help run this site are bound by confidentiality"] },
      { h: "Contact", p: "For privacy questions, please write to us using the details on our Contact page." },
    ]} />
  ),
});
