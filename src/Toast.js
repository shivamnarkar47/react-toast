import React from 'react';
import styled,{createGlobalStyle} from "styled-components";
import {rgba} from 'polished';
import CloseIcon from '@material-ui/icons/Close';
import {
  ToastContainer,
  toast,
  cssTransition
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Frame = styled.div`
position: relative;
width:100%;
height:100vh;
display: flex;
align-items:center;
justify-content: center;
background:#101010;
`;

const Button = styled.button`
padding:1.25rem 2.5rem;
border-radius:50px;
background:#7a00ff;
color:${rgba('white',0.85)};
border:none;
box-shadow:0 0 5px #000;
font-family: 'Poppins';
font-size:18px;
`;

const Animations = createGlobalStyle`
@keyframes up {
0%{transform:translateY(94px);}
100%{transform:translateY(0px);}
}
.slide-up{animation:up;}
@keyframes down {
0%{transform:translateY(0);}
100%{transform:translateY(94px);opacity:0;}
}
.slide-down{
animation:down;
}
`;

const transition = cssTransition({
enter:"slideup",
exit:"slidedown",
duration:350,
});

const Styles = createGlobalStyle`
body .Toastify__toast-container{
bottom:110px;
margin:0;
}
body .Toastify__toast{
padding:1rem;
border-radius:0.5rem;
}
body .Toastify__toast--success{
background:#39bf9a;
}
`;


const ToastClose = (
<CloseIcon>close</CloseIcon>
)

const ToastifyAlert = () =>{
const click =()=> toast.success("Sucess!");
return(
  <Frame>
    <Animations/>
    <Styles/>
    <Button onClick={click}>
      Show Toast
    </Button>
    <ToastContainer
      closeButton={ToastClose}
      transition={transition}
      position="bottom-center"
      />
  </Frame>
)
};

export default ToastifyAlert;