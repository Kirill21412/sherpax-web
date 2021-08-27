import React from "react"
import CloseBlack from "../../assets/close_black.svg"
import ListWhite from "../../assets/list-white.svg"
import ListBlack from "../../assets/list-black.svg"
import RoundBlack from "../../assets/round_black.svg"
import RoundWhite from "../../assets/round-white.svg"
import { MenuButtonWrapper } from "./styles"

interface Props {
  type: "close" | "list",
  color: "white" | "black",
  className?: string,
  onClick: () => void,
  isMenuOpen?: boolean
}

const MenuButton = ({ type, color, className, onClick, isMenuOpen}: Props): React.ReactElement<Props> => {
  return (
    <MenuButtonWrapper onClick={onClick} className={className}>
      <img className='round' src={color === "black" || isMenuOpen ? RoundBlack : RoundWhite} alt="" />
      <div className={`menu-button ${color === 'black'? 'black-bar': 'white-bar' } ${isMenuOpen? 'cross': ''}`}>
        <div className="bar"/>
        <div className="bar"/>
        <div className="bar"/>
      </div>
    </MenuButtonWrapper>
  )
}

export default MenuButton
