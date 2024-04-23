// src/hooks/useTooltip.ts
import { useCallback, useContext } from 'react';
import { TooltipContext } from '../context/TooltipContext';

export function useTooltip() {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error('useTooltip must be used within a TooltipProvider');
  }

  const { setShow, setTop, setLeft, setContent, ...state } = context;

  const showTooltip = useCallback((ref: HTMLElement, content: string) => {
    if (ref) {
      const rect = ref.getBoundingClientRect();
      setTop(rect.top + window.scrollY + rect.height); // Adjust position below the input field
      setLeft(rect.left + window.scrollX);
      setContent(content);
      setShow(true);
    }
  }, [setTop, setLeft, setContent, setShow]);

  const hideTooltip = useCallback(() => {
    setShow(false);
  }, [setShow]);

  return {
    ...state,
    showTooltip,
    hideTooltip
  };
}

