export class ImageCache{
  private static cache: ImageCache;
  private imageCaches:Record<string, any>={}
  static get instance(): ImageCache {
    if (!ImageCache.cache) {
      ImageCache.cache = new ImageCache();
    }
    return ImageCache.cache;
  }

  // source: https://css-tricks.com/pre-caching-image-with-react-suspense/
    public async read(src:string) {
      if (!this.imageCaches[src]) {
        this.imageCaches[src] = await new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            this.imageCaches[src] = true;
            resolve(this.imageCaches[src]);
          };
          img.src = src;
        }).then((img) => {
          this.imageCaches[src] = true;
        });
      }
      if (this.imageCaches[src] instanceof Promise) {
        throw this.imageCaches[src];
      }
      console.log(this.imageCaches)
      return this.imageCaches[src];
    }
}