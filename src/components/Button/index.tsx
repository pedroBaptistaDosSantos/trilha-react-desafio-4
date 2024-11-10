import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled = true }: IButtonProps) => {
  return (
    <ButtonContainer onClick={()=> null} disabled={disabled}>{title}</ButtonContainer>
  )
}

export default Button;
