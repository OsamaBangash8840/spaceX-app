import React, { type ElementType } from 'react';

type Variant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h5Light'
    | 'h6'
    | 'h6Light'
    | 'bodyBold'
    | 'bodyMedium'
    | 'bodyRegular'
    | 'smallBold'
    | 'smallMedium'
    | 'smallRegular'
    | 'ExtraSmallBold'
    | 'ExtraSmallMedium'
    | 'ExtraSmallRegular';

interface Props {
    variant?: Variant;
    children: React.ReactNode;
    className?: string;
    as?: ElementType;
    onClick ?: () => void;
}

const tags: Record<Variant, ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h5Light: 'h5',
    h6: 'h6',
    h6Light: 'h6',
    bodyBold: 'p',
    bodyMedium: 'p',
    bodyRegular: 'p',

    smallBold: 'p',
    smallMedium: 'p',
    smallRegular: 'p',

    ExtraSmallBold: 'span',
    ExtraSmallMedium: 'span',
    ExtraSmallRegular: 'span',
};

const sizes: Record<Variant, string> = {
    h1: 'text-xl sm:text-2xl lg:text-4xl !leading-140 font-bold font-heading ',
    h2: 'text-xl sm:text-xl md:text-[26px] leading-150 font-bold font-heading',
    h3: 'text-lg sm:text-xl md:text-[24px] leading-150 font-bold font-heading',
    h4: 'text-lg md:text-[22px] leading-130 font-bold font-heading',
    h5: 'text-base sm:text-lg lg:text-xl leading-130 font-bold font-heading',
    h5Light:
        'text-base sm:text-lg lg:text-xl leading-130 font-normal font-heading',
    h6: 'text-base md:text-lg leading-150 font-bold font-heading',
    h6Light: 'text-base md:text-lg leading-150 font-normal font-heading',

    bodyBold: 'text-sm sm:text-base leading-130 font-bold font-body',
    bodyMedium: 'text-sm sm:text-base leading-180 font-medium font-body',
    bodyRegular: 'text-sm sm:text-base leading-180 font-normal font-body',

    smallBold: 'text-[13px] sm:text-sm leading-130 font-bold font-body',
    smallMedium: 'text-[13px] sm:text-sm leading-180 font-medium font-body',
    smallRegular: 'text-[13px] sm:text-sm leading-180 font-normal font-body',

    ExtraSmallBold: 'text-[11px] text-xs leading-130 font-bold font-body',
    ExtraSmallMedium: 'text-[11px] text-xs leading-180 font-medium font-body',
    ExtraSmallRegular: 'text-[11px] text-xs leading-180 font-normal font-body',
};

export const Typography = ({
    variant = 'bodyRegular',
    children,
    className,
    as,
    ...rest
}: Props): React.ReactElement => {
    const sizeClasses = sizes[variant];
    const Tag = as ?? tags[variant];

    return (
        <Tag className={`${sizeClasses} ${className}`} {...rest}>
            {children}
        </Tag>
    );
};
