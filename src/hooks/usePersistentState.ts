import {
  useCallback,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction
} from 'react';

export function usePersistentState<T>(
  storageKey: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setInternalValue] =
    useState<T>(() => {
      try {
        const storedValue =
          window.localStorage.getItem(
            storageKey
          );

        if (storedValue === null) {
          return initialValue;
        }

        return JSON.parse(
          storedValue
        ) as T;
      } catch (error) {
        console.error(
          `Errore durante la lettura di "${storageKey}".`,
          error
        );

        return initialValue;
      }
    });

  const setValue: Dispatch<
    SetStateAction<T>
  > = useCallback(
    (nextValue) => {
      setInternalValue(
        (currentValue) => {
          const resolvedValue =
            typeof nextValue ===
            'function'
              ? (
                  nextValue as (
                    previousValue: T
                  ) => T
                )(currentValue)
              : nextValue;

          try {
            window.localStorage.setItem(
              storageKey,
              JSON.stringify(
                resolvedValue
              )
            );
          } catch (error) {
            console.error(
              `Errore durante il salvataggio di "${storageKey}".`,
              error
            );
          }

          return resolvedValue;
        }
      );
    },
    [storageKey]
  );

  useEffect(() => {
    function handleStorage(
      event: StorageEvent
    ) {
      if (
        event.key !== storageKey ||
        event.newValue === null
      ) {
        return;
      }

      try {
        setInternalValue(
          JSON.parse(event.newValue) as T
        );
      } catch (error) {
        console.error(
          `Errore durante la sincronizzazione di "${storageKey}".`,
          error
        );
      }
    }

    window.addEventListener(
      'storage',
      handleStorage
    );

    return () => {
      window.removeEventListener(
        'storage',
        handleStorage
      );
    };
  }, [storageKey]);

  return [value, setValue];
}