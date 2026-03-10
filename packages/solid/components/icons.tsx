import type { JSX } from 'solid-js';

export type IconProps = JSX.SvgSVGAttributes<SVGSVGElement> & {
  size?: number | string;
};

const toSize = (value: IconProps['size']) => {
  if (value === undefined) {
    return '1em';
  }

  return typeof value === 'number' ? `${value}px` : value;
};

export const ChevronDownIcon = (props: IconProps) => {
  const { size: iconSize, ...rest } = props;
  const size = toSize(iconSize);

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      width={size}
      height={size}
      {...rest}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
};

export const CheckIcon = (props: IconProps) => {
  const { size: iconSize, ...rest } = props;
  const size = toSize(iconSize);

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      width={size}
      height={size}
      {...rest}
    >
      <path d="m5 12 4 4 10-10" />
    </svg>
  );
};
