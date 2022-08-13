import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const NavigationLink = styled(NavLink)`
font-weight: 400;
 text-decoration: none;
    :not(:last-child){
        margin-right:  30px;
    }
`