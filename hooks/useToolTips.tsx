import { useState, RefObject, useCallback } from "react";


type UseTooltipProps = {
  ref: RefObject<HTMLElement>;
};

export const useTooltip = ({ ref }: UseTooltipProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  return {
    isVisible,
    onMouseEnter,
    onMouseLeave,
  };
}
