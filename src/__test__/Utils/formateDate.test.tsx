import { formatDate } from "../../utils";

const isoDate="2023-12-15T07:54:11.635Z";
describe("formatDate", () => {
  it("should return a readable date time", async () => {
    const date= formatDate(isoDate);
    expect(date).toBe("Dec 15, 2023, 8:54 AM")
  });

  it("should return N/A is not date is passed to it", async () => {
    const date= formatDate("");
    expect(date).toBe("N/A")
  });
});