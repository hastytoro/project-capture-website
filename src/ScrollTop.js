import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// This component when used will ensure we scroll to the top of the page when -
// the location of the url changes, meaning we changing the page.
// Our effect triggers a top/left window scroll whenever the path changes.
const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(
    () =>
      window.scroll({
        top: 0,
        left: 0,
      }),
    [pathname]
  );
  return null;
};

export default ScrollTop;
