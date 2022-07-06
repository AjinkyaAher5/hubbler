import { useState } from "react";
import styled from "styled-components";
import { Actions } from "./Actions";
import deleteIcon from "../assests/delete.png";
import "../style/conditions.css"
export const RulesInfo = ({ array, id, edit }) => {
  const [inputFields, setInputFields] = useState([{}]);
  const [maxCondition, setMaxCondition] = useState(false);
  return (
    <Container>
      <RuleName>{array[id]}</RuleName>
      <ButtonName>Button Name</ButtonName>
      <Button>Create Po </Button>
      <Error>{maxCondition ? "! More than 8 condition not allowed" : ""}</Error>
      <br />
      <select disabled={edit} name="" id="select_condtion">
        <option value="ifAll">If All</option>
        <option value="anyOne">Any One</option>
      </select>
      <span>of the following conditions are met:</span>

      <br />
      {inputFields.map((item) => {
        return (
          <form>
            <select
              className="conditions_list"
              disabled={edit}
              name="box1"
              id=""
            >
              <option value="text">Text</option>
              <option value="number">Number</option>
            </select>
            <select
              className="conditions-list"
              disabled={edit}
              name="box2"
              id=""
            >
              <option value="contains">Contains</option>
              <option value="work">Work</option>
            </select>
            <select
              className="conditions-list"
              disabled={edit}
              name="box2"
              id=""
            >
              <option value="imp">Important</option>
              <option value="urgent">Urgent</option>
            </select>
            <input
              className="add_list"
              disabled={edit}
              name="box3"
              value={item.value}
              type="text"
              placeholder="type to search and add"
            />

            <DeleteImg
              onClick={() => {
                if (!edit) {
                  inputFields.pop();
                  setMaxCondition(false);
                  setInputFields([...inputFields]);
                }
              }}
              src={deleteIcon}
            ></DeleteImg>
          </form>
        );
      })}

      <button
        className="addCondition_button"
        disabled={edit}
        onClick={() => {
          if (inputFields.length === 8) return setMaxCondition(true);
          else {
            setInputFields([...inputFields, {}]);
          }
        }}
      >
        Add New Condition
      </button>
      <hr />
      <Actions edit={edit}></Actions>
    </Container>
  );
};
const Container = styled.div`
  margin: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  flex-basis: 75%;
  height: auto;
  padding: 12px 22px;
`;
const DeleteImg = styled.img`
  width: 16px;
  height: 16px;
  margin: 10px 5px 0px 5px;
  cursor: pointer;
`;
const RuleName = styled.div`
  width: 50%;
  height: 4%;
  font-weight: 100;
  font-size: 18px;
`;
const ButtonName = styled.div`
  width: 50%;
  height: 4%;
  font-weight: 100;
  font-size: 15px;
  margin-top: 3%;
`;
const Button = styled.button`
  margin-top: 10px;
  background-color: white;
  border: none;
  text-align: left;
  width: 25%;
  padding: 8px 10px;
`;
const Error = styled.span`
  color: red;
  margin-left: 20%;
  font-size: 20px;
`;
