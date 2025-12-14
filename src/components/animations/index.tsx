import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

// ============================================
// Animation Variant Presets
// ============================================

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            damping: 20,
            stiffness: 100,
        },
    },
};

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            damping: 20,
            stiffness: 100,
        },
    },
};

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring" as const,
            damping: 20,
            stiffness: 100,
        },
    },
};

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring" as const,
            damping: 20,
            stiffness: 100,
        },
    },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring" as const,
            damping: 15,
            stiffness: 200,
        },
    },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const staggerContainerFast: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
};

// ============================================
// Base Animation Props Interface
// ============================================

interface BaseAnimationProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    once?: boolean;
    amount?: number;
}

// ============================================
// Animated Container - For staggered children
// ============================================

interface AnimatedContainerProps extends BaseAnimationProps {
    stagger?: number;
    delayChildren?: number;
    as?: keyof JSX.IntrinsicElements;
}

export const AnimatedContainer = ({
    children,
    className = "",
    stagger = 0.1,
    delayChildren = 0.2,
    once = true,
    amount = 0.2,
    as = "div",
}: AnimatedContainerProps) => {
    const Component = motion[as as keyof typeof motion] as typeof motion.div;

    return (
        <Component
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: stagger,
                        delayChildren,
                    },
                },
            }}
        >
            {children}
        </Component>
    );
};

// ============================================
// Fade In Animation
// ============================================

type FadeDirection = "up" | "down" | "left" | "right" | "none";

interface FadeInProps extends BaseAnimationProps {
    direction?: FadeDirection;
    distance?: number;
    as?: keyof JSX.IntrinsicElements;
}

export const FadeIn = ({
    children,
    className = "",
    direction = "up",
    distance = 30,
    delay = 0,
    duration = 0.5,
    once = true,
    amount = 0.2,
    as = "div",
}: FadeInProps) => {
    const Component = motion[as as keyof typeof motion] as typeof motion.div;

    const getInitialPosition = () => {
        switch (direction) {
            case "up":
                return { y: distance };
            case "down":
                return { y: -distance };
            case "left":
                return { x: distance };
            case "right":
                return { x: -distance };
            default:
                return {};
        }
    };

    return (
        <Component
            className={className}
            initial={{ opacity: 0, ...getInitialPosition() }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once, amount }}
            transition={{
                duration,
                delay,
                type: "spring" as const,
                damping: 20,
                stiffness: 100,
            }}
        >
            {children}
        </Component>
    );
};

// ============================================
// Scale Animation
// ============================================

interface ScaleInProps extends BaseAnimationProps {
    initialScale?: number;
    as?: keyof JSX.IntrinsicElements;
}

export const ScaleIn = ({
    children,
    className = "",
    initialScale = 0.8,
    delay = 0,
    duration = 0.5,
    once = true,
    amount = 0.2,
    as = "div",
}: ScaleInProps) => {
    const Component = motion[as as keyof typeof motion] as typeof motion.div;

    return (
        <Component
            className={className}
            initial={{ opacity: 0, scale: initialScale }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once, amount }}
            transition={{
                duration,
                delay,
                type: "spring" as const,
                damping: 15,
                stiffness: 200,
            }}
        >
            {children}
        </Component>
    );
};

// ============================================
// Stagger Item - To be used inside AnimatedContainer
// ============================================

interface StaggerItemProps extends Omit<BaseAnimationProps, "once" | "amount"> {
    direction?: FadeDirection;
    distance?: number;
    as?: keyof JSX.IntrinsicElements;
}

export const StaggerItem = ({
    children,
    className = "",
    direction = "up",
    distance = 30,
    as = "div",
}: StaggerItemProps) => {
    const Component = motion[as as keyof typeof motion] as typeof motion.div;

    const getHiddenPosition = () => {
        switch (direction) {
            case "up":
                return { y: distance };
            case "down":
                return { y: -distance };
            case "left":
                return { x: distance };
            case "right":
                return { x: -distance };
            default:
                return {};
        }
    };

    return (
        <Component
            className={className}
            variants={{
                hidden: { opacity: 0, ...getHiddenPosition() },
                visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        type: "spring" as const,
                        damping: 20,
                        stiffness: 100,
                    },
                },
            }}
        >
            {children}
        </Component>
    );
};

// ============================================
// Hover Scale Animation
// ============================================

interface HoverScaleProps {
    children: ReactNode;
    className?: string;
    scale?: number;
    as?: keyof JSX.IntrinsicElements;
}

export const HoverScale = ({
    children,
    className = "",
    scale = 1.05,
    as = "div",
}: HoverScaleProps) => {
    const Component = motion[as as keyof typeof motion] as typeof motion.div;

    return (
        <Component
            className={className}
            whileHover={{ scale }}
            whileTap={{ scale: scale - 0.1 }}
            transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
        >
            {children}
        </Component>
    );
};

// ============================================
// Hover Lift Animation (Y movement + shadow)
// ============================================

interface HoverLiftProps {
    children: ReactNode;
    className?: string;
    lift?: number;
    as?: keyof JSX.IntrinsicElements;
}

export const HoverLift = ({
    children,
    className = "",
    lift = -8,
    as = "div",
}: HoverLiftProps) => {
    const Component = motion[as as keyof typeof motion] as typeof motion.div;

    return (
        <Component
            className={className}
            whileHover={{
                y: lift,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
            }}
            transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
        >
            {children}
        </Component>
    );
};

// ============================================
// Animated Text (Word by word or character by character)
// ============================================

interface AnimatedTextProps {
    text: string;
    className?: string;
    type?: "word" | "character";
    delay?: number;
    stagger?: number;
    once?: boolean;
}

export const AnimatedText = ({
    text,
    className = "",
    type = "word",
    delay = 0,
    stagger = 0.05,
    once = true,
}: AnimatedTextProps) => {
    const items = type === "word" ? text.split(" ") : text.split("");

    return (
        <motion.span
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: stagger,
                        delayChildren: delay,
                    },
                },
            }}
        >
            {items.map((item, index) => (
                <motion.span
                    key={index}
                    className="inline-block"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: "spring" as const,
                                damping: 20,
                                stiffness: 100,
                            },
                        },
                    }}
                >
                    {item}
                    {type === "word" && index < items.length - 1 ? "\u00A0" : ""}
                </motion.span>
            ))}
        </motion.span>
    );
};

// ============================================
// Animated Line (Growing line animation)
// ============================================

interface AnimatedLineProps {
    className?: string;
    width?: number | string;
    height?: number;
    delay?: number;
    duration?: number;
    once?: boolean;
}

export const AnimatedLine = ({
    className = "bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500",
    width = 96,
    height = 1.5,
    delay = 0,
    duration = 0.6,
    once = true,
}: AnimatedLineProps) => {
    return (
        <motion.div
            className={`rounded-full ${className}`}
            style={{ height }}
            initial={{ width: 0 }}
            whileInView={{ width }}
            viewport={{ once }}
            transition={{ duration, delay }}
        />
    );
};

// ============================================
// Animated Progress Bar
// ============================================

interface AnimatedProgressProps {
    value: number;
    className?: string;
    barClassName?: string;
    delay?: number;
    duration?: number;
    showDot?: boolean;
    once?: boolean;
}

export const AnimatedProgress = ({
    value,
    className = "w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden",
    barClassName = "h-full bg-gradient-to-r from-primary-500 via-primary-600 to-purple-600 rounded-full",
    delay = 0,
    duration = 1.2,
    showDot = true,
    once = true,
}: AnimatedProgressProps) => {
    return (
        <div className={`relative ${className}`}>
            <motion.div
                className={`relative ${barClassName}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${value}%` }}
                viewport={{ once }}
                transition={{
                    duration,
                    delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
            >
                {showDot && (
                    <motion.div
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once }}
                        transition={{ delay: delay + duration, type: "spring" as const }}
                    />
                )}
            </motion.div>
        </div>
    );
};

// ============================================
// Floating Animation (Continuous)
// ============================================

interface FloatingProps {
    children: ReactNode;
    className?: string;
    yOffset?: number;
    duration?: number;
    as?: keyof JSX.IntrinsicElements;
}

export const Floating = ({
    children,
    className = "",
    yOffset = 20,
    duration = 6,
    as = "div",
}: FloatingProps) => {
    const Component = motion[as as keyof typeof motion] as typeof motion.div;

    return (
        <Component
            className={className}
            animate={{
                y: [0, -yOffset, 0],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            {children}
        </Component>
    );
};

// ============================================
// Pulse Animation (Continuous)
// ============================================

interface PulseProps {
    children: ReactNode;
    className?: string;
    scale?: number;
    duration?: number;
    as?: keyof JSX.IntrinsicElements;
}

export const Pulse = ({
    children,
    className = "",
    scale = 1.2,
    duration = 2,
    as = "span",
}: PulseProps) => {
    const Component = motion[as as keyof typeof motion] as typeof motion.span;

    return (
        <Component
            className={className}
            animate={{
                scale: [1, scale, 1],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            {children}
        </Component>
    );
};

// ============================================
// Rotate Animation (Continuous)
// ============================================

interface RotateProps {
    children: ReactNode;
    className?: string;
    duration?: number;
    as?: keyof JSX.IntrinsicElements;
}

export const Rotate = ({
    children,
    className = "",
    duration = 20,
    as = "div",
}: RotateProps) => {
    const Component = motion[as as keyof typeof motion] as typeof motion.div;

    return (
        <Component
            className={className}
            animate={{ rotate: 360 }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            {children}
        </Component>
    );
};

// ============================================
// Section Header (Reusable animated section title)
// ============================================

interface SectionHeaderProps {
    badge?: string;
    title: string;
    highlightedWord?: string;
    description?: string;
    className?: string;
}

export const SectionHeader = ({
    badge,
    title,
    highlightedWord,
    description,
    className = "",
}: SectionHeaderProps) => {
    // Split title to find and highlight the word
    const renderTitle = () => {
        if (!highlightedWord) {
            return title;
        }

        const parts = title.split(highlightedWord);
        return (
            <>
                {parts[0]}
                <span className="gradient-text">{highlightedWord}</span>
                {parts[1] || ""}
            </>
        );
    };

    return (
        <AnimatedContainer className={`text-center mb-16 ${className}`}>
            {badge && (
                <StaggerItem>
                    <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
                        {badge}
                    </span>
                </StaggerItem>
            )}

            <StaggerItem>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    {renderTitle()}
                </h2>
            </StaggerItem>

            <StaggerItem>
                <AnimatedLine className="bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 mx-auto mb-6" />
            </StaggerItem>

            {description && (
                <StaggerItem>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        {description}
                    </p>
                </StaggerItem>
            )}
        </AnimatedContainer>
    );
};

// ============================================
// Background Orb (Animated gradient blob)
// ============================================

interface BackgroundOrbProps {
    className?: string;
    size?: string;
    position?: string;
    colors?: string;
    duration?: number;
}

export const BackgroundOrb = ({
    className = "",
    size = "w-80 h-80",
    position = "absolute top-0 left-0",
    colors = "from-primary-200/40 to-purple-200/40 dark:from-primary-900/30 dark:to-purple-900/30",
    duration = 10,
}: BackgroundOrbProps) => {
    return (
        <motion.div
            className={`${position} ${size} bg-gradient-to-r ${colors} rounded-full blur-3xl pointer-events-none ${className}`}
            animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
};

// ============================================
// Card with animations
// ============================================

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    hoverLift?: boolean;
    hoverScale?: boolean;
    delay?: number;
    className?: string;
}

export const AnimatedCard = ({
    children,
    hoverLift = true,
    hoverScale = false,
    delay = 0,
    className = "",
    ...props
}: AnimatedCardProps) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
                duration: 0.5,
                delay,
                type: "spring" as const,
                damping: 20,
            }}
            whileHover={{
                y: hoverLift ? -8 : 0,
                scale: hoverScale ? 1.02 : 1,
                boxShadow: hoverLift ? "0 20px 40px rgba(0, 0, 0, 0.15)" : undefined,
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
};
