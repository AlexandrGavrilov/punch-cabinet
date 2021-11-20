import { css, SimpleInterpolation } from 'styled-components';

export type TMedia = 'mobile' | 'small-tablet' | 'tablet' | 'small-screen' | 'screen';

const media: Record<TMedia, number> = {
  mobile: 320,
  'small-tablet': 480,
  tablet: 769,
  'small-screen': 1025,
  screen: 1200,
};

export const applyMedia = (type: TMedia, styles: SimpleInterpolation) => css`
  @media (max-width: ${media[type]}px) {
    ${styles}
  }
`;
