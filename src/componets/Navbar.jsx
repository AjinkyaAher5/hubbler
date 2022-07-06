import { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assests/hubbler.png";

import nextArrow from "../assests/next.png";
export const Navbar = ({ handleEdit }) => {
  const [state, setState] = useState({ time: Date(), edit: false });
  useEffect(() => {
    handleEdit(state.edit);
  });
  return (
    <>
      <FlexBox>
        <FlexBoxA>
          <Logo src={logo}></Logo>
          <Item1>
            Demo Custom App<SubHeading>App Name</SubHeading>
          </Item1>
          <Item8>
            <NextArrow src={nextArrow} />
          </Item8>
          <Item2>
            Assessment Stage<SubHeading>STAGE</SubHeading>
          </Item2>
          <Item8>
            <NextArrow src={nextArrow} />
          </Item8>
          <Item3>
            Create PO Button <SubHeading>BUTTON</SubHeading>
          </Item3>
          <Item8>
            <NextArrow src={nextArrow} />
          </Item8>
          <Item4>Button Rules</Item4>
        </FlexBoxA>
        <FlexBoxB></FlexBoxB>
        <FlexBoxC>
          <Item5>App Saved on {state.time.substring(0,25)}</Item5>
          <Item6></Item6>
          <Item7>
            <input
              onClick={() =>
                setState({ ...state, edit: !state.edit, time: Date() })
              }
              type="submit"
              value={state.edit ? "Edit" : "Save"}
            />
          </Item7>
        </FlexBoxC>
      </FlexBox>
    </>
  );
};

//Styled
const FlexBox = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  font-size: 12px;
  padding: 8px;
`;
const FlexBoxA = styled.div`
  display: flex;
  align-items: center;
`;
const FlexBoxB = styled.div`
  /* flex-basis: 28vw; */
`;
const FlexBoxC = styled.div`
  flex-basis: 33vw;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 60px;
  height: 50px;
`;
const Item1 = styled.div``;
const Item2 = styled.div``;
const Item3 = styled.div``;
const Item4 = styled.div``;
const Item5 = styled.div`
  flex-basis: 80%;
  text-align:right;
`;
const Item6 = styled.div``;
const Item7 = styled.div``;
const Item8 = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`;

const NextArrow = styled.img`
  width: 15px;
  height: 15px;
  margin: 5px;
  src: url(${(props) => props.src});
`;
const SubHeading = styled.div`
  text-align:center;
`;
