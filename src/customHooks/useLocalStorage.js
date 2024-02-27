import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const getLocalStorageValue = () => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error(`Error getting localStorage item ${key}:`, error);
      return initialValue;
    }
  };
  const [value, setValue] = useState(getLocalStorageValue);
  const setLocalStorageValue = (newValue) => {
    try {
   
      localStorage.setItem(key, JSON.stringify(newValue));
      setValue(newValue);
    } catch (error) {
      console.error(`Error setting localStorage item ${key}:`, error);
    }
  };
  return [value, setLocalStorageValue];
};

export default useLocalStorage;
