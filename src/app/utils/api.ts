import slugify from "slugify";

export const convertUrl = (str: string) => {
  if (!str) return "";
  str = slugify(str, {
    lower: true,
    locale: "vi",
  });
  return str;
};

export const getIdToUrl = (str: string) => {
  const word = str.split("-");
  return word[word.length - 1];
};
