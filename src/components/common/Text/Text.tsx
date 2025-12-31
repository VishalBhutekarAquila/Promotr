import { Text as MantineText, TextProps as MantineTextProps } from '@mantine/core';

type TextProps = MantineTextProps & {
  // size?: "xs" | "sm" | "md" | "lg" | "xl" | number; // optional, defaults to 'md'
  fontStyle?: string; // optional, defaults to false
  c?: string; // optional
  className?: string; // optional
  children: React.ReactNode; // required
};

const Text: React.FC<TextProps> = ({ c, className, children, ...props }) => {
  return (
    <MantineText c={c ?? 'neutral.0'} className={className} {...props}>
      {children}
    </MantineText>
  );
};

export default Text;
