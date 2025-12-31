import { Title as MantineTitle, TitleProps } from '@mantine/core';

const Title: React.FC<TitleProps> = ({ children, ...props }) => {
  return <MantineTitle {...props}>{children}</MantineTitle>;
};

export default Title;
