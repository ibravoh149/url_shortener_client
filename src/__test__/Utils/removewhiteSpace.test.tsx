import { removeWhiteSpace } from "../../utils/removeWhiteSpace";

const testString="I have a dream"

describe("removeWhiteSpace", () => {
  it("should return a string with no spaces", async () => {
    const result= removeWhiteSpace(testString);
    expect(result).toBe("Ihaveadream")
  });

  it("should return an empty string if no argument is passed", async () => {
    const result= removeWhiteSpace('');
    expect(result.length).toBe(0)
  });
});
