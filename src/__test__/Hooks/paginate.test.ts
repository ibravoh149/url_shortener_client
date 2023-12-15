import { renderHook, act } from "@testing-library/react-hooks";
import { usePaginate } from "../../Hooks";

const dummyData = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

describe("usePaginate", () => {
  it("should return 3 data when asked to paginate with size 3", async () => {
    const { result } = renderHook(() => usePaginate<number>());
    expect(
      result.current.paginate({
        list: dummyData,
        perPage: 3,
        pageNumber: 1,
      }).data.length
    ).toBe(3);
  });

  it("should return 2 data when asked to paginate with size 3", async () => {
    const { result } = renderHook(() => usePaginate<number>());
    expect(
      result.current.paginate({
        list: dummyData,
        perPage: 2,
        pageNumber: 1,
      }).data.length
    ).toBe(2);
  });

  it("should return 10 data when asked to paginate with size 3", async () => {
    const { result } = renderHook(() => usePaginate<number>());
    expect(
      result.current.paginate({
        list: dummyData,
        perPage: 10,
        pageNumber: 1,
      }).data.length
    ).toBe(10);
  });

  it("should return data when asked to paginate with page 3 and size 2", async () => {
    const { result } = renderHook(() => usePaginate<number>());
    expect(
      result.current.paginate({
        list: dummyData,
        perPage: 2,
        pageNumber: 3,
      }).data
    ).toStrictEqual([5, 6]);
  });

  it("should return data when asked to paginate with page 1 and size 6", async () => {
    const { result } = renderHook(() => usePaginate<number>());
    expect(
      result.current.paginate({
        list: dummyData,
        perPage: 6,
        pageNumber: 1,
      }).data
    ).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should return data when asked to paginate with page 4 and size 4", async () => {
    const { result } = renderHook(() => usePaginate<number>());
    expect(
      result.current.paginate({
        list: dummyData,
        perPage: 4,
        pageNumber: 4,
      }).data
    ).toStrictEqual([13, 14, 15, 16]);
  });

  it("should return data when asked to paginate with page 2 and size 10", async () => {
    const { result } = renderHook(() => usePaginate<number>());
    expect(
      result.current.paginate({
        list: dummyData,
        perPage: 10,
        pageNumber: 2,
      }).data
    ).toStrictEqual([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });
});
