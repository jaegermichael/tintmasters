import { forwardRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Small wrapper that fades + slides its children up into view the first
 * time they scroll into the viewport. Framer Motion's `reducedMotion="user"`
 * (set globally in App.jsx) automatically disables this for visitors who
 * prefer reduced motion, so no extra handling is needed here.
 */
const Reveal = forwardRef(function Reveal(
  { children, delay = 0, y = 24, className, as = 'div', ...rest },
  ref
) {
  const Component = motion[as] ?? motion.div;
  return (
    <Component
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
});

export default Reveal;
