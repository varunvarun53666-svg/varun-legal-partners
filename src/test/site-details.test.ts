import { describe, expect, it } from "vitest";
import { EMAIL, FIRM_NAME, HEAD_OFFICE, MAP_LINK, OFFICE_HOURS, OFFICE_LANDMARK, PHONE_1, PHONE_2, TEL, TEL_2, WHATSAPP } from "@/lib/site";

describe("Client's real details", () => {
  it("uses the client's public firm name", () => {
    expect(FIRM_NAME).toBe("Vidyacharan & Associates");
  });
  it("uses the primary phone and dial link", () => {
    expect(PHONE_1).toBe("+91 86182 79621");
    expect(TEL).toBe("tel:+918618279621");
  });
  it("uses the secondary phone and dial link", () => {
    expect(PHONE_2).toBe("+91 94489 33426");
    expect(TEL_2).toBe("tel:+919448933426");
  });
  it("uses the dedicated WhatsApp destination and greeting", () => {
    const url = new URL(WHATSAPP);
    expect(url.pathname).toBe("/919740444322");
    expect(url.searchParams.get("text")).toBe("Hello Vidyacharan & Associates, I would like to enquire about a legal matter.");
  });
  it("uses the client's email", () => {
    expect(EMAIL).toBe("connect@vidyacharanandassociates.com");
  });
  it("uses the single office and its landmark", () => {
    expect(HEAD_OFFICE).toBe("#175/1, 3rd Floor, Ananthapura Main Road, Yelahanka New Town, Bengaluru, Karnataka 560064");
    expect(OFFICE_LANDMARK).toBe("Near MedPlus Medicals / Singanayakahalli Post Office");
  });
  it("uses the provided map destination", () => {
    expect(MAP_LINK).toBe("https://www.google.com/maps/search/?api=1&query=Pinnacle+Advisors+and+Associates+Ananthapura+Main+Road+Yelahanka+Bengaluru");
  });
  it("uses the new Monday to Saturday opening hours", () => {
    expect(OFFICE_HOURS).toBe("Monday – Saturday: 10:00 AM – 6:00 PM");
  });
});