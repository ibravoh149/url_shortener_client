type Paginate = {
  list: Record<string, any>[];
  perPage?: number;
  pageNumber?: number;
};
type PaginatedResponse = {
  hasNextPage: boolean;
  hasPrevousPage: boolean;
  pageCount: number;
  data: Paginate["list"];
  pageNumber: number;
};
const usePaginatateHook = ({ list, perPage = 5, pageNumber = 1 }: Paginate) => {
  const paginate = (): PaginatedResponse => {
    const totalPages = Math.ceil(Number(list.length) / Number(perPage));
    const offset = Number(pageNumber - 1) * perPage;
    if (perPage >= list.length) {
      return {
        hasNextPage: false,
        hasPrevousPage: false,
        pageCount: totalPages,
        data: list,
        pageNumber,
      };
    }
    const items = _truncate(list, offset, perPage * pageNumber);
    const isNextPage = pageNumber < totalPages;
    const isPrevousPage = pageNumber > 1;
    return {
      hasNextPage: isNextPage,
      hasPrevousPage: isPrevousPage,
      pageCount: totalPages,
      data: items,
      pageNumber,
    };
  };

  const _truncate = (list: Paginate["list"], start: number, end: number) => {
    return list.slice(start, end);
  };

  return { paginate };
};

export default usePaginatateHook;
