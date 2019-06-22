import styled from 'styled-components';

const HeaderStyles = styled.div`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  align-items: stretch;

`

const NavStyles = styled.ul`
  display: flex;
  justify-self: start;
  list-style-type: none;
  li {
    margin-right: 2rem;
  }
  a {
    color: ${props => props.theme.offWhite};
    font-weight: 200;
    font-size: 1.75rem;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid ${props => props.theme.offWhite};
    }
    @media (max-width: 500px) {
      font-weight: 400;
    }
  }
`;

export { HeaderStyles, NavStyles };