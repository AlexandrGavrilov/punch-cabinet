import styled, { css } from 'styled-components';
import { applyMedia } from '../../utils/media';

export const SWrapper = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export const SHeadWrapper = styled.div`
  display: flex;
  padding: 40px;
  width: 100%;
  justify-content: center;
  align-items: center;
  
  ${applyMedia('tablet', css`
    padding: 35px;
  `)}
`;

export const SHeadImage = styled.div``;

export const SHeadTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: #ff6767;
  ${applyMedia('tablet', css`
    font-size: 20px;
  `)}
`;

export const SHeadDescription = styled.div`
  background: #e7caca;
  padding: 20px;
  border-radius: 4px;
  max-width: 450px;
  font-size: 18px;
  box-shadow: ${Array(24).fill('').map((_, index) => `${index}px ${index}px 2px #ff6767`).join(', ')};
  ${applyMedia('tablet', css`
    font-size: 12px;
  `)}
`;

export const SBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e7cece;
  margin: 0 35px;
  padding: 20px 40px;
  border-radius: 4px;
  text-align: center;
  max-width: 950px;
  align-self: center;
  box-shadow: ${Array(24).fill('').map((_, index) => `${index}px ${index}px 2px #ff6767`).join(', ')};
`;

export const SBodyTitle = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: #ff6767;
`;

export const SBodyDescription = styled.div`
  font-size: 24px;
`;

export const SSpecialistsWrapper = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SSpecialists = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 4px;

  img {
    width: 140px;
    padding: 10px;
    border-radius: 14px;

    ${applyMedia('tablet', css`
      width: 80px;
  `)}
  }
`;
export const SSpecialist = styled.div``;
export const SSpecialistsTitle = styled.div``;
