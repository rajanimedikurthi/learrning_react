import { useState } from "react";
import Button from "../UI/Button/Button";
import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem;
  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "rgb(240, 5, 5)" : "#ccc")};
    background-color: ${(props) =>
      props.invalid ? "rgb(250, 128, 114)" : "transparent"};
  }

  & label {
    color: ${(props) => (props.invalid ? "rgb(240, 5, 5)" : "inherit")};
  }
  & input:focus {
    outline: none;
    background-color: #d4c197;
    border-color: #d89707;
  }
`;

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const [isTitleValid, setTitleValidtiy] = useState(true);
  const [isAmountValid, setAmountValidtiy] = useState(true);
  const [isDateValid, setDateValidtiy] = useState(true);

  const titleChangeHandler = (event) => {
    let value = event.target.value;

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: value };
    });
    if (userInput.enteredTitle.trim().length > 0) {
      setTitleValidtiy(true);
    }
  };
  const amountChangeHandler = (event) => {
    let value = event.target.value;

    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: value };
    });
    if (userInput.enteredAmount.trim().length > 0) {
      setAmountValidtiy(true);
    }
  };
  const dateChangeHandler = (event) => {
    let value = event.target.value;

    setUserInput((prevState) => {
      return { ...prevState, enteredDate: value };
    });

    if (userInput.enteredDate.trim().length > 0) {
      setDateValidtiy(true);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    if (
      userInput.enteredTitle.trim().length === 0 ||
      userInput.enteredAmount.trim().length === 0 ||
      userInput.enteredDate.trim().length === 0
    ) {
      if (userInput.enteredTitle.trim().length === 0) {
        setTitleValidtiy(false);
      }
      if (userInput.enteredAmount.trim().length === 0) {
        setAmountValidtiy(false);
      }
      if (userInput.enteredDate.trim().length === 0) {
        setDateValidtiy(false);
      }
      return;
    }

    setUserInput({
      enteredAmount: "",
      enteredDate: "",
      enteredTitle: "",
    });
    props.onSaveExpenseData(expenseData);
    props.onStopEdit();
  };
  const cancelHandler = () => {
    props.onStopEdit();
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControl invalid={!isTitleValid}>
        <label>Title</label>
        <input
          type="text"
          value={userInput.enteredTitle}
          onChange={titleChangeHandler}
        />
      </FormControl>

      <FormControl invalid={!isAmountValid}>
        <label>Amount</label>
        <input
          type="number"
          value={userInput.enteredAmount}
          onChange={amountChangeHandler}
        />
      </FormControl>
      <FormControl invalid={!isDateValid}>
        <label>Date</label>
        <input
          type="date"
          value={userInput.enteredDate}
          min="2019-01-01"
          max="2022-12-31"
          onChange={dateChangeHandler}
        />
      </FormControl>
      <div className="form-actions 2-column">
        <Button onClick={cancelHandler}>cancel</Button>
        <Button type="submit">Add expenses</Button>
      </div>
    </form>
  );
};
export default ExpenseForm;
