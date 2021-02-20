interface BreakpointsData {
  windowWidth: number;
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
}

/**
 * Function that safely extracts data from object with nested fields
 * @param origin {Object} object to extract data from
 * @param path {Array} list of keys describing path to desired piece of data
 * @param defaultValue {}
 */
export function extract<ExtractedValueType>(origin: {}, path: string[], defaultValue: ExtractedValueType = null) {
  const result = path.reduce((object, key) => (object && object[key]) ? object[key] : null, origin);
  return result === null ? defaultValue : result;
}

/**
 * Replace params of format ":id" in string with provided values
 * @param string - string that contains placeholders that start with ":"
 * @param values - list of values to insert
 */
export function insertUrlParams(string: string, values: string[]): string {
  return values.reduce((res, current) => res.replace(/:.*?(?=\/|$)/, current), string);
}

export function getBreakpoints(): BreakpointsData{
  const windowWidth = document.documentElement.clientWidth;
  return {
    windowWidth,
    isMobile: windowWidth < 768,
    isTablet: windowWidth >= 768 && windowWidth < 1200,
    isLaptop: windowWidth >= 1200 && windowWidth < 1440,
    isDesktop: windowWidth >= 1440
  };
}

export function guid() {
  return Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
}
