type Paginate<T> = {
  list: T;
  // list: Record<string, any>[];
  perPage?: number;
  pageNumber?: number;
};
type PaginatedResponse<T> = {
  hasNextPage: boolean;
  hasPrevousPage: boolean;
  pageCount: number;
  data: T[];
  pageNumber: number;
};
const usePaginatateHook =<T=[]>() => {
  const paginate = ({ list, perPage = 5, pageNumber = 1 }: Paginate<T[]>): PaginatedResponse<T> => {
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

  const _truncate = (list:T[], start: number, end: number) => {
    return list.slice(start, end);
  };

  return { paginate };
};

export default usePaginatateHook;
