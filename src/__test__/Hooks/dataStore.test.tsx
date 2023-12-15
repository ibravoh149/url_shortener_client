import { renderHook } from "@testing-library/react-hooks";
import { useDataStore } from "../../Hooks";

describe("useDataStore", () => {
  it("should return 0 data when asked to retrieve entries at empty state", async () => {
    const { result } = renderHook(() => useDataStore());
    expect(result.current.getEntries(1, 10).data.length).toBe(0);
  });

});
