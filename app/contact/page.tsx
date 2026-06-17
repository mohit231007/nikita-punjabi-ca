import type { Metadata } from "next";
import { ContactSection } from "@/components/dom/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact CA Nikita Punjabi for Virtual CFO, Zoho Finance, accounting and compliance services."
};

export default function ContactPage() {
  return (
    <div className="page-shell page-shell--inner">
      <ContactSection standalone />
    </div>
  );
}
