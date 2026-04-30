import { useEffect, useRef } from 'react';

/**
 * useInactiveTabTitle
 * Alterna o título da aba quando o usuário sai da página,
 * chamando atenção de volta sem ser invasivo.
 *
 * @param {string} activeTitle   - título normal da página
 * @param {string} inactiveTitle - título exibido quando a aba está inativa
 */
export function useInactiveTabTitle(activeTitle, inactiveTitle = '👋 Volte quando quiser →') {
  const intervalRef = useRef(null);

  useEffect(() => {
    const originalTitle = activeTitle || document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        let toggle = false;
        intervalRef.current = setInterval(() => {
          document.title = toggle ? originalTitle : inactiveTitle;
          toggle = !toggle;
        }, 1800);
      } else {
        clearInterval(intervalRef.current);
        document.title = originalTitle;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(intervalRef.current);
      document.title = originalTitle;
    };
  }, [activeTitle, inactiveTitle]);
}
