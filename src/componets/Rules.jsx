import { useState } from "react";
import styled from "styled-components";
import { RulesInfo } from "./RulesInfo";
import deleteSign from "../assests/deleteSign.png";
import leftArrowIcon from "../assests/left-arrow.png";
export const Rules = ({ edit }) => {
  const [arr, setArr] = useState(["Default Rule"]);
  const [maxRule, setMaxRule] = useState(false);
  const [index, setIndex] = useState(0);

  const addInput = () => {
    setArr((s) => {
      return [...s, ""];
    });
  };
  const handleChange = (e, i) => {
    const newArr = [...arr];
    newArr[i] = e.target.value;
    return setArr(newArr);
  };
  return (
    <Container>
      <RulesList>
        <BackStageText>
          <LeftArrow src={leftArrowIcon}></LeftArrow>Back to Stages
        </BackStageText>
        <ErrorText>
          {maxRule ? "!You cannot add more than 5 Rules to a button" : ""}
        </ErrorText>
        <NumberOfRules>RULES {arr.length}</NumberOfRules>
        {arr.map((item, i) => {
          return (
            <>
              <InputBox
                value={item}
                disabled={edit}
                onFocus={() => {
                  setIndex(i);
                }}
                onChange={(e) => {
                  handleChange(e, i);
                }}
                key={i}
                id={i}
                type="text"
              />
              <DeleteImg
                onClick={() => {
                  if (!edit) { 
                    arr.pop();
                  setMaxRule(false);
                  setArr([...arr]);
                  }
                }}
                src={deleteSign}
                alt=""
              />
            </>
          );
        })}
        <br />
        <AddNewRuleButton
          disabled={edit}
          onClick={() => {
            if (arr.length === 5) return setMaxRule(true);
            else addInput();
          }}
        >
          Add New Rule
        </AddNewRuleButton>
      </RulesList>
      <RulesInfo edit={edit} id={index} array={arr}></RulesInfo>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
`;
const AddNewRuleButton = styled.button`
  width: 55%;
  height: 30px;
`;
const BackStageText = styled.div`
  margin-bottom: 10vh;
`;
const LeftArrow = styled.img`
  width: 10px;
  height: 10px;
`;
const RulesList = styled.div`
  margin-top: 10px;
  flex-basis: 25%;
  padding: 15px 0px 0px 20px;
`;

const DeleteImg = styled.img`
  width: 15px;
  height: 15px;
`;
const NumberOfRules = styled.div`
  margin-bottom: 2vh;
`;
const InputBox = styled.input`
  padding: 5px 5px;
  margin: 5px 0;
  width: 55%;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
`;
const ErrorText = styled.p`
  height:25px;
  color: red;
  font-weight: bold;
  font-size: 15px;
`;
