import styled from "styled-components";

export const ContentCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1400px;
  flex-wrap: wrap;
`;

export const CardProduct = styled.div`
  height: 300px;
  max-width: 427px;
  min-width: 280px;
  flex: 1 1 30%;
  border: 1px solid rgba(92, 0, 0, 0.589);
  border-radius: 5px;
  position: relative;
  transition: all 0.6s;

  &:hover {
    transition: all 0.6s;
    transform: scale(0.9);
  }

  &:hover {
    .cardFront {
      transition: all 0.7s;
      filter: blur(7px);
    }
  }

  &:hover {
    .cardBack {
      opacity: 1;
      transition: all 0.7s;
    }
  }
`;

export const CardFront = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: end;
  align-items: center;
  padding: 0 20px 20px;
  font-weight: 900;
  font-size: 20px;
  color: white;
  text-shadow: 0px 0px 0px 5px red;
  background-image: url("${(props) => props.photo}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Name = styled.p`
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-text-stroke: 0.5px darkgrey;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
`;

export const CardBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(128, 128, 128, 0.2);
  filter: none;
  opacity: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 15px 30px;
  text-align: center;
`;

export const ConsultButton = styled.button`
  height: auto;
  width: auto;

  background-color: rgb(255, 80, 80);
  padding: ${(props) => (props.cart ? "2px 8px" : "8px 18px")};
  font: inherit;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0px 1px;

  &:hover {
    transform: translate(0, -2px);
    box-shadow: 0px 3px;
  }
  &:active {
    box-shadow: 0 1px;
    transform: translate(0, 1px);
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const ContainerBtns = styled.div`
  width: 100%;
  padding: 30px 15px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const Button = ({
  children,
  disabled = false,
  onClick = (e) => e.preventDefault(),
}) => {
  return (
    <ConsultButton disabled={disabled} onClick={onClick}>
      {children}
    </ConsultButton>
  );
};
