import { useInView } from "react-intersection-observer";
// A hook that handles actions/events toward `element` once they in `view`.
// The target is basically set to false and when in view changed to true.
// A configuration object for settings like a `threshold`.
import { useAnimation } from "framer-motion";
// `useAnimation` is a way for you to control a animation in framer-motion.
// By default our `motion` components have `initial` and `animate` positions
// So when a `motion` component is rendered to screen it animates immediately.
// But with `useAnimation` we can control when that occurs instead.
// For example onClick triggers or below when the element is in `view`.

// CUSTOM HOOK:
export const useScroll = (time) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: time });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};
