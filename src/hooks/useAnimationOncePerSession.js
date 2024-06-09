import { useState, useEffect } from "react";

export function useAnimationOncePerSession(animationStorageKey) {
      const [animationPlayed, setAnimationPlayed] = useState(
        sessionStorage.getItem(animationStorageKey) || false,
      );

      useEffect(() => {
        const animationHasAlreadyPlayed =
          sessionStorage.getItem(animationStorageKey);

        if (!animationHasAlreadyPlayed) {
          setAnimationPlayed(true);
          sessionStorage.setItem(animationStorageKey, "true");
        }
      }, []);

      return animationPlayed === "true";
}