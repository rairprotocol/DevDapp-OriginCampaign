//unused-component

import emotionIsPropValid from '@emotion/is-prop-valid';
import styled from 'styled-components';

interface IItemRankContainerStyled {
  primaryColor?: string;
  showItems?: boolean;
}

export const ItemRankContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => emotionIsPropValid(prop)
})<IItemRankContainerStyled>`
  background-color: ${(props) =>
    props.primaryColor === 'rhyno' ? 'var(--rhyno)' : '#383637'};
`;

export const SelectBoxItemRank = styled.div.withConfig({
  shouldForwardProp: (prop) => emotionIsPropValid(prop)
})<IItemRankContainerStyled>`
  display: ${(props) => (props.showItems ? 'block' : 'none')};
  background-color: ${(props) =>
    props.primaryColor === 'rhyno' ? 'var(--rhyno)' : '#383637'};
  border: ${(props) =>
    props.primaryColor === 'rhyno' ? '1px solid #D37AD6' : 'none'};
  position: relative;
  z-index: 10;
`;

export const SelectBoxContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => emotionIsPropValid(prop)
})<IItemRankContainerStyled>`
  backgroundcolor: var(--${(props) => props.primaryColor});
`;
