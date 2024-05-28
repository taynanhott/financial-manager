import { useEffect } from "react";
import { animate, useMotionValue, useTransform } from "framer-motion";

const useAnimatedCount = (targetValue: number, duration: number = 1.5) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));

    useEffect(() => {
        const controls = animate(count, targetValue, { duration });
        return () => controls.stop();
    }, [targetValue, duration, count]);

    return rounded;
};

export default useAnimatedCount;