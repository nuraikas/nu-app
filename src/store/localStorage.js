const LOCAL_STORAGE_KEY = "MY_TO_DO_APP_STORAGE"

export const setLocalStorage = data => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
export const getLocalStorage = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []