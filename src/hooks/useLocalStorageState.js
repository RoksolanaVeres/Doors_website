import { useEffect, useRef, useState } from "react";

export function useLocalStorageState(initialState, storageKey) {
  const [state, setState] = useState(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      return JSON.parse(stored);
    } else {
      return typeof initialState === "function" ? initialState : initialState;
    }
  });

  const prevKeyRef = useRef(storageKey);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== storageKey) {
      window.localStorage.removeItem(storageKey);
    }
    prevKeyRef.current = storageKey;
    const serialized = JSON.stringify(state);
    window.localStorage.setItem(storageKey, serialized);
  }, [state, storageKey]);

  return [state, setState];
}
