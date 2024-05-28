import { useEffect } from 'react';
import { useMotionValue, useTransform, animate } from 'framer-motion';

const useAnimatedCount = (targetValue: number, duration: number = 1.5) => {
    const count = useMotionValue(0);

    const rounded = useTransform(count, latest => latest.toFixed(2));

    useEffect(() => {
        const controls = animate(count, targetValue, { duration });
        return () => controls.stop();
    }, [targetValue, duration, count]);

    return rounded;
};

export default useAnimatedCount;