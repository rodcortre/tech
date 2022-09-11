import { motion } from "framer-motion";
import { FC, ReactElement } from "react";
interface Props {
  children?: ReactElement<any> | ReactElement<any>[];
  drag?: boolean;
}
export const AnimatedDiv: FC<Props> = ({ children, drag = true }) => {
  return (
    <motion.div
      drag={drag}
      dragConstraints={{ top: 20, left: 20 }}
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
    >
      {children}
    </motion.div>
  );
};
