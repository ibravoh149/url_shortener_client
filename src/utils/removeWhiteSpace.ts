export const removeWhiteSpace = (string: string) => {
  if (!string) return "";
  return string.replace(/\s/g, "");
};
