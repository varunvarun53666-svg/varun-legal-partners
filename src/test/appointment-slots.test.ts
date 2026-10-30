import { describe, expect, it } from "vitest";
import { makeSlots } from "@/routes/appointment";

/** Displayed time -> minutes since midnight. */
function toMinutes(s: string): number {
  const [time = "", meridiem = ""] = s.split(" ");
  const [hh = "0", mm = "0"] = time.split(":");
  const hour = Number(hh);
  const isPm = meridiem === "PM";
  return (isPm ? (hour === 12 ? 12 : hour + 12) : hour === 12 ? 0 : hour) * 60 + Number(mm);
}

describe("Appointment time slots", () => {
  const slots = makeSlots();

  it("starts at 10:00 AM", () => {
    expect(slots[0]).toBe("10:00 AM");
  });

  it("ends the last 40-minute slot by 6:00 PM", () => {
    expect(slots[slots.length - 1]).toBe("5:20 PM");
  });

  it("never offers a slot that would run past 6:00 PM", () => {
    const latestEnd = Math.max(...slots.map((s) => toMinutes(s) + 40));
    expect(latestEnd).toBe(18 * 60);
  });

  it("offers exactly 12 preferred starts", () => {
    expect(slots).toHaveLength(12);
  });

  it("spaces every preferred start by 40 minutes", () => {
    expect(slots.slice(1).map((s, i) => toMinutes(s) - toMinutes(slots[i] ?? ""))).toEqual(Array(11).fill(40));
  });
});
