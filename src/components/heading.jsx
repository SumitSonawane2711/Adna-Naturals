import { cn } from '@/lib/utils'
import { motion } from 'motion/react';
import PropTypes from 'prop-types';

export const Heading = (
    { Tag = "h1", children, className }
) => {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", x: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}
            viewport={{ once: true }}
        >
            <Tag className={cn('text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 drop-shadow-md md:text-4xl font-bold ', className)}>
                {children}
            </Tag>
        </motion.div>
    )
}

Heading.propTypes = {
    Tag: PropTypes.elementType,
    children: PropTypes.node,
    className: PropTypes.string,
};
