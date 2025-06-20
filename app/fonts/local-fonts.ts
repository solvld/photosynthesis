import localFont from 'next/font/local';

// Hardman
export const hardman = localFont({
  src: [
    {
      path: '../../public/fonts/Hardman/Hardman-Regular.woff2',
      weight: '400',
    },
  ],
  variable: '--font-hardman',
  display: 'swap',
});

// ABC Diatype
export const abcDiatype = localFont({
  src: [
    {
      path: '../../public/fonts/ABCDiatype/ABCDiatype-Regular.woff2',
      weight: '400',
    },
  ],
  variable: '--font-abc-diatype',
  display: 'swap',
});

// Suisse Int’l
export const suisseIntl = localFont({
  src: [
    {
      path: '../../public/fonts/SuisseIntl/SuisseIntl-Medium.woff2',
      weight: '500',
    },
  ],
  variable: '--font-suisse-intl',
  display: 'swap',
});
