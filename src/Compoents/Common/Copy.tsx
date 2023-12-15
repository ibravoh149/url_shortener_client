import React, { useCallback, useState } from "react";
import { FaCopy } from "react-icons/fa6";
import { timeout } from "../../utils";

export default function CopyBox({
  text,
  copyComplete,
}: {
  text: string;
  copyComplete?: () => void;
}) {
  const [isCopied, setIsCopied] = useState(false);

  const triggerCopy = useCallback(async () => {
    setIsCopied(true);
    navigator.clipboard.writeText(text);
    await timeout(3000);
    copyComplete?.();
    setIsCopied(false);
  }, [text]);

  return (
    <span className="relative" onClick={triggerCopy}>
      {isCopied && (
        <span className="absolute top-[-10px] right-[-45px] text-green-300">
          copied
        </span>
      )}
      <FaCopy />
    </span>
  );
}
