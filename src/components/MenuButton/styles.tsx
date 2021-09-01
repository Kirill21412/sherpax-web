import styled from "styled-components";
import more from "../../assets/icon_more.svg"

export const MenuButtonWrapper = styled.div`
html,
body {
  margin: 0;
}

#MobileBox {
  font-family: sans-serif;
  // height: 10vh;
  background-color:#fff;
}

#page-wrap {
  text-align: center;
  overflow: auto;
  top: 45%;
  position: relative;
}
.bm-menu-wrap{
  width:66.7vw !important;
  top:0rem !important;
}
.bm-item {
  display: inline-block;

  /* Our sidebar item styling */
  text-decoration: none;
  // margin-bottom: 10px;
  color: #000;
  transition: color 0.2s;
}

.bm-item:hover {
  color: white;
}

.bm-burger-button {
  position: fixed;
  width: 6vw;
  height: 6vh;
  right: 5vw;
  margin-top: -4.6vh;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  height: 30px;
  width: 35px;
  background: #fff;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 2.5vh!important;
  width: 4vw!important;
  top:2.5vh!important;
  right:4vw!important;
}

/* Color/shape of close button cross */
.bm-cross {
  // background: #bdc3c7;
}

/* General sidebar styles */
.bm-menu {
  background: #fff;
  // padding: 2.75vh 0 2.75vh 5.3vw;
  font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
  overflow:hidden;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
  margin-top: -5.7vh !important;
  margin-left: -6vw !important;
}

`;
