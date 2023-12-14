import { DataStore } from "../Provider/DataStoreProvider/types";
import { BaseService } from "./BaseService";

class Service extends BaseService {
  private static cache: Service;

  static get instance(): Service {
    if (!Service.cache) {
      Service.cache = new Service();
    }
    return Service.cache;
  }

  private setupStore(): DataStore[] {
    const store: DataStore[] = [];
    try {
      this.store.setItem(this.store_key, JSON.stringify(store));
      return store;
    } catch (error) {
      throw error;
    }
  }

  private fetchStore() {
    const store = this.store.getItem(this.store_key);
    if (!store) {
      return this.setupStore();
    }
    return this.parseData(store);
  }

  private parseData(string: string): DataStore[] {
    if (string) return JSON.parse(string);
    return [];
  }

  private store_data(payload: DataStore[]) {
    this.store.setItem(this.store_key, JSON.stringify(payload));
  }

  public async loadData(): Promise<DataStore[]> {
    try {
      return new Promise((resolve, reject) => {
        let data = this.fetchStore();
        resolve(data);
      });
    } catch (error) {
      throw error;
    }
  }

  public async updateData(payload: DataStore[]): Promise<void> {
    try {
      const store = this.fetchStore();
      store.concat(payload);
      this.store_data(store);
    } catch (error) {
      throw error;
    }
  }
}

export default Service;
