/**
 * Save user data into local storage
 * @param key
 * @param value
 */
export function writeStorage(key: string, value: any) {
  const storage = localStorage.getItem('__appData') ? JSON.parse(localStorage.getItem('__appData')) : {};
  storage[key] = value;
  localStorage.setItem('cx-data', JSON.stringify(storage));
}

/**
 * Read data from local storage
 * @param key
 */
export function readStorage(key: string) {
  const storage = localStorage.getItem('__appData') ? JSON.parse(localStorage.getItem('__appData')) : {};
  return storage[key];
}
