import { cn } from "@/lib/utils";
import { motion, stagger } from "motion/react";
import PropTypes from "prop-types";

export const SubHeading = ({ Tag = "h2", children, className }) => {
  return (
    <motion.div
     
      transition={{
        duration: 0.3,
        ease: "easeInOut",
       
      }}
      viewport={{ once: true }}
    >
      <Tag
        className={cn(
          "text-base sm:text-lg lg:text-xl text-gray-800 max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-0",
          className
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
};

SubHeading.propTypes = {
  Tag: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
};
