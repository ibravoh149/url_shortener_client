import React, { Suspense, useCallback } from "react";
import { ImageProps } from ".";
import { ImageCache } from "../../Service/Image";
import { useDebounceQuery } from "../../Hooks";

export default function Image(props: ImageProps) {
  const { src } = props;

  const generatePreviewImage = (url: string) => {
    return `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=24`;
  };

  const doCache = useCallback(async() => {
    await ImageCache.instance.read(generatePreviewImage(src as string));
  }, [src]);

  useDebounceQuery(() => {
    doCache();
  }, [doCache]);

  return (
    <Suspense>
      <img src={generatePreviewImage(src as string)} />
    </Suspense>
  );
}
