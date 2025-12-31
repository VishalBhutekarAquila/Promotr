import { MantineProvider, createTheme, rem } from '@mantine/core';
import '@mantine/core/styles.css';

const MantineWrapper = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    fontFamily: 'Afacad,sans-serif',
    cursorType: 'pointer',
    primaryColor: 'primary',
    scale: 1,
    primaryShade: 8,
    colors: {
      primary: [
        '#ff6e1f', // 0
        'rgba(255, 110, 31, 0.45)',
        '#ff6e1f', // 2
        '#ff6e1f', // 3
        '#ff6e1f', // 4
        '#ff6e1f', // 5
        '#ff6e1f', // 6
        '#ff6e1f', // 7
        '#ff6e1f', // 8
        '#ff6e1f', // 9
      ],
      secondary: [
        '#faf3e1', // 0
        '#faf3e1', // 1
        '#faf3e1', // 2
        '#faf3e1', // 3
        '#faf3e1', // 4
        '#faf3e1', // 5
        '#ffffff', // 6
        '#faf3e1', // 7
        '#faf3e1', // 8
        '#faf3e1', // 9
      ],
      tertiary: [
        '#f5e6c5', // 0
        '#808080', // 1
        '#f5e6c5', // 2
        '#f5e6c5', // 3
        '#f5e6c5', // 4
        '#f5e6c5', // 5
        '#f5e6c5', // 6
        '#f5e6c5', // 7
        '#f5e6c5', // 8
        '#f5e6c5', // 9
      ],
      dark: [
        '#222222', // 0
        'rgba(34, 34, 34, 0.52)', // 1
        '#000000', // 2
        '#131313', // 3
        '#222222', // 4
        '#222222', // 5
        '#222222', // 6
        '#222222', // 7
        '#222222', // 8
        '#222222', // 9
      ],
    },
    headings: {
      fontFamily: 'DIN Condensed, sans-serif',
      fontWeight: '700',
      sizes: {
        h1: { fontSize: rem('120px'), lineHeight: rem('45px') },
        h2: { fontSize: rem('56px'), lineHeight: rem('36px') },
        h3: { fontSize: rem('32px'), lineHeight: rem('33px') },
        h4: { fontSize: rem('24px'), lineHeight: rem('30px') },
        h5: { fontSize: rem('16px'), lineHeight: rem('27px') },
        h6: { fontSize: rem('12px'), lineHeight: rem('24px') },
      },
    },

    breakpoints: {
      desktop: '639px',
    },
  });

  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};

export default MantineWrapper;
