import React, {
  FC,
  RefObject,
  useEffect,
} from "react";
import { useTooltip } from "../../hooks/useToolTips";

type toolTipPropsType = {
  elementRef: RefObject<HTMLElement>;
  toolTipClass: string;
  content: string;
};

const ToolTips: FC<toolTipPropsType> = ({ elementRef, content, toolTipClass }) => {

  const { isVisible, onMouseEnter, onMouseLeave } = useTooltip({ref: elementRef});

  useEffect(() => {
    const element = elementRef?.current;

    if (element) {
      element.addEventListener("mouseenter", onMouseEnter);
      element.addEventListener("mouseleave", onMouseLeave);
    }

    // cleans up event listeners by removing them when the component is unmounted
    return () => {
      if (element) {
        element.removeEventListener("mouseenter", onMouseEnter);
        element.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, [elementRef, onMouseEnter, onMouseLeave]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`toolTip_main ${toolTipClass}`}>
      <div className={`toolTip_contents `}>
        {content}
      </div>
    </div>
  );
};

export default ToolTips;


//   if (toolTipClass === "myList_tp") {
//     setShowToolTip("myList_tp");
//     setContent("Add to my list");
//   } else if (toolTipClass === "dislike_tp") {
//     setShowToolTip("dislike_tp");
//     setContent("Not for me");
//   } else if (toolTipClass === "like_tp") {
//     setShowToolTip("like_tp");
//     setContent("I like this");
//   } else if (toolTipClass === "doubleLike_tp") {
//     setShowToolTip("doubleLike_tp");
//     setContent("Love this!");
//   } else if (toolTipClass === "episodes_info_tp") {
//     setShowToolTip("episodes_info_tp");
//     setContent("Episodes & info");
//   } else {
//     setShowToolTip("");
//   }
