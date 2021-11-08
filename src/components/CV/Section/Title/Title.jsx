import styled from 'styled-components';

const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 0.45em;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.primaryText}`};
`;

export default Title;
