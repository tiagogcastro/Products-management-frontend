import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface IContainerProps {
  isErrored: boolean;
  isFilled: boolean;
  isFocused: boolean;
}

export const Container = styled.div<IContainerProps>`
  background: #17161b;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #17161b;
  color: #666360;

  display: flex;
  align-items: center;

  ${props => props.isErrored && css`
    border: 2px solid #c53030;
  `}

  ${props => props.isFocused && css`
    color: #7000E0;
    border: 2px solid #7000E0;
  `}

  ${props => props.isFilled && css`
    color: #7000E0;
  `}
  
  & + div {
    margin-top: 8px;
  }

  input {
    color: #f4ede8;
    flex: 1;
    background: transparent;
    font-size: 1.4rem;
    
    & ::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 1.6rem;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;