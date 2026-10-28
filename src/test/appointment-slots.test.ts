import { describe, expect, it } from "vitest";
import { makeSlots } from "@/routes/appointment";

describe("Appointment time slots", () => {
  const slots = makeSlots();

  it("starts at 9:00 AM", () => {
    expect(slots[0]).toBe("9:00 AM");
  });

  it("ends the last 40-minute slot by 6:00 PM", () => {
    expect(slots[slots.length - 1]).toBe("5:00 PM");
  });

  it("never offers a slot that would run past 6:00 PM", () => {
    const toMinutes = (s: string) => {
      const time = s.split(" ")[0];
      const hour = Number(time.split(":")[0]);
      return (s.endsWith("PM") ? hour + 12 : hour) * 60 + Number(time.split(":")[1]);
    };
    const latestEnd = Math.max(...slots.map((s) => toMinutes(s) + 40));
    expect(latestEnd).toBeLessThanOrEqual(18 * 60);
  });
});
