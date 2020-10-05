import styled from 'styled-components';
import {
    Container
} from '../shared/index';

export const Footer = styled.footer `
    background-color: purple;
    color: #fff;
`

export const FooterContainer = styled(Container)
`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0;

${Container}
`