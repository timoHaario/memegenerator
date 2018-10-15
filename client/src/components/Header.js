import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Colors from './../colors'

import "./../App.css";

const HeaderWrapper = styled.div`
  position: fixed;
  height: 80px;
  width: 100%;
  top: 0;
  background: ${Colors.header.bg};

  a {
    text-decoration: none;
    float: right;
    height: 100%;
    margin-right: 20px;
    padding: 0 10px;
  }
`

const NavLink = styled.p`
  color: white;
  vertical-align: middle;
  line-height: 80px;
  font-weight: lighter;
`

const Header = (props) => (
  <HeaderWrapper>
    <Link to='/create'>
    	<NavLink>Create</NavLink>
    </Link>
    <Link to='/browse'>
    	<NavLink>Browse</NavLink>
  	</Link>
  </HeaderWrapper>
)

export default Header
