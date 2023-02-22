import Image from 'next/image';
import styled from 'styled-components';

export const StyledHeader = styled.header`
    height: 3.5rem;
    display: flex;
    background: #171717;
    color: #fff;
    position: relative;
    align-items: center;
    justify-content: center;
`;

export const StyledLogo = styled(Image)`
    padding: 0.6rem 0;
`;
