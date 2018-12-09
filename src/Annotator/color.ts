const hashCode = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
     hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
} 

const numberToHex = (num: number) => {
  const c = (num & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

  return "00000".substring(0, 6 - c.length) + c;
}

const numberToRGB = (num: number) => {
  const c = (num & 0x00FFFFFF)

  return [c >> 16 & 0xFF, c >> 8 & 0xFF, c & 0xFF];
}

export const stringToHex = (str: string) => `#${numberToHex((hashCode(str)))}`

export const stringToRGBA = (str: string) => {
  const rgb = numberToRGB((hashCode(str)))
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.2)`
}
