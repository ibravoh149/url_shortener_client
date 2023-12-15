export const STORE_KEY = "SHORTLY";
export class BaseService {
  protected store: typeof localStorage = localStorage;
  protected store_key: string = STORE_KEY;
}
