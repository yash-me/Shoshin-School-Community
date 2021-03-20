import React from "react";
import classnames from "classnames";
import styled from "styled-components";
import LinearProgress from '@material-ui/core/LinearProgress';


export default React.memo(styled(({ className }) => (
  
  <div className={classnames("loader", className)}>
    <LinearProgress style={{marginTop:'5px', width:'20%'}}  color="secondary" />
    <span className="loader__ball loader__ball--1" />
    <span className="loader__ball loader__ball--2" />
    <span className="loader__ball loader__ball--3" />
    
  </div>
  
  
))`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color:#1A262F;

  span.loader__ball {
    display: inline-block;
    margin: auto 0.25rem;
    height: 1rem;
    width: 1rem;
    border-radius: 0.375rem;
    background: #6294C2;
    

    &.loader__ball--1,
    &.loader__ball--2,
    &.loader__ball--3 {
      animation: bulging 2s infinite ease-in-out;
    }

    &.loader__ball--1 {
      animation-delay: -0.4s;
    }

    &.loader__ball--2 {
      animation-delay: -0.2s;
    }

    @keyframes bulging {
      0%,
      80%,
      100% {
        transform: scale(0);
        opacity: 0.5;
      }
      40% {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
`);
