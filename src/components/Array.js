import React, { Component } from "react";
import styled from "styled-components";

// styled component
const Yellow = styled.li`
  color: Yellow;
  font-size: 25px;
  list-style: none;
`;
const Blue = styled.li`
  color: Blue;
  font-size: 25px;
  list-style: none;
`;
const Red = styled.li`
  color: Red;
  font-size: 25px;
  list-style: none;
`;
const Green = styled.li`
  color: green;
  font-size: 25px;
  list-style: none;
`;
const ButtonComponent = styled.button`
  width: 95%;
  height: 7vh;
  border-radius: 12px;
  display: flex;
  border: 1px solid #6a6b6e;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  background: #d7d7d7;
  color: #555555;
  font-weight: 900;
`;

class Array extends Component {
  // state
  state = {
    colors: [
      { colorName: "Amarillo" },
      { colorName: "Azul" },
      { colorName: "Rojo" },
      { colorName: "Verde" }
    ]
  };
  // get color div function
  getColorDiv(colorName) {
    switch (colorName) {
      case "Amarillo":
        return <Yellow>{colorName}</Yellow>;
      case "Azul":
        return <Blue>{colorName}</Blue>;
      case "Rojo":
        return <Red>{colorName}</Red>;
      case "Verde":
        return <Green>{colorName}</Green>;
    }
  }
  render() {
    const { colors } = this.state;
    return (
      <div>
        <ul>
          {colors.map(color => (
            <li>{this.getColorDiv(color.colorName)}</li>
          ))}
        </ul>
        <div className="fatherbutton">
          <ButtonComponent>
            <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSI1MTJweCI+PHBhdGggZD0ibTEyLjg1MyAxNi4wOTA1Yy0uMDY4ODQ3NyAwLS4xMzgxODQtLjAxNDE4My0uMjAzMTI1LS4wNDMwMzg0bC00LjYxODE2LTIuMDU2MDYtNC42MTgxNiAyLjA1NjA2Yy0uMTcwODk4LjA3NTgwNjYtLjM3MDExNy4wNDkzOTU2LS41MTU2MjUtLjA2NzAwMzMtLjE0NTk5Ni0uMTE2ODg4LS4yMTQzNTUtLjMwNTY3LS4xNzc3MzQtLjQ4OTA3MmwxLjAxODU1LTUuMTAyNDktMy41NjA1NS0zLjU2NjhjLS4xMzAzNzEtLjEzMDU4Mi0uMTc4MjIzLS4zMjIyOTktLjEyNS0uNDk5MzQzLjA1MzIyMjctLjE3NjU1NS4xOTk3MDctLjMwOTU4My4zODAzNzEtLjM0NTc3NGw1LjEwMzUyLTEuMDIyNjUgMi4wMzc2LTQuNTkyMzljLjE2MTEzMy0uMzYxOTEzLjc1MjkzLS4zNjE5MTMuOTE0MDYzIDBsMi4wMzc2IDQuNTkyMzkgNS4xMDM1MiAxLjAyMjY1Yy4xODA2NjQuMDM2MTkxNS4zMjcxNDguMTY5MjE5LjM4MDM3MS4zNDU3NzQuMDUzMjIyNy4xNzcwNDQuMDA1MzcxMS4zNjg3NjEtLjEyNS40OTkzNDNsLTMuNTYwNTUgMy41NjY4IDEuMDE4NTUgNS4xMDI0OWMuMDM2NjIxMS4xODM0MDItLjAzMTczODMuMzcyMTg0LS4xNzc3MzQuNDg5MDcyLS4wOTAzMzIxLjA3MjM4My0uMjAxMTcyLjExMDA0Mi0uMzEyNS4xMTAwNDJ6bS00LjgyMTI5LTMuMTQ4MTZjLjA2OTMzNTkgMCAuMTM4NjcyLjAxNDE4My4yMDMxMjUuMDQzMDM4NGwzLjkzODQ4IDEuNzUzODEtLjg4MTgzNi00LjQxNjgxYy0uMDMyNzE0OC0uMTY0MzI4LjAxODU1NDctLjMzNDAzNi4xMzY3MTktLjQ1MjM5MmwzLjA4OTM2LTMuMDk0MzYtNC40NDA5Mi0uODkwMTExYy0uMTU5MTgtLjAzMTc4OTktLjI5Mjk2OS0uMTM4ODk3LS4zNTg4ODctLjI4NzU3NWwtMS42ODYwNC0zLjc5OTYtMS42ODYwNCAzLjc5OTZjLS4wNjU5MTguMTQ4Njc4LS4xOTk3MDcuMjU1Nzg1LS4zNTg4ODcuMjg3NTc1bC00LjQ0MDkyLjg5MDExMSAzLjA4OTM2IDMuMDk0MzZjLjExODE2NC4xMTgzNTYuMTY5NDM0LjI4ODA2NC4xMzY3MTkuNDUyMzkybC0uODgxODM2IDQuNDE2ODEgMy45Mzg0OC0xLjc1MzgxYy4wNjQ0NTMtLjAyODg1NTMuMTMzNzg5LS4wNDMwMzg0LjIwMzEyNS0uMDQzMDM4NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0uMDMyIC0uMDkpIiBmaWxsPSIjMDAwMDAwIi8+PC9zdmc+Cg==" />
            Checkout
            <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSI1MTJweCI+PHBhdGggZD0ibTEyLjg1MyAxNi4wOTA1Yy0uMDY4ODQ3NyAwLS4xMzgxODQtLjAxNDE4My0uMjAzMTI1LS4wNDMwMzg0bC00LjYxODE2LTIuMDU2MDYtNC42MTgxNiAyLjA1NjA2Yy0uMTcwODk4LjA3NTgwNjYtLjM3MDExNy4wNDkzOTU2LS41MTU2MjUtLjA2NzAwMzMtLjE0NTk5Ni0uMTE2ODg4LS4yMTQzNTUtLjMwNTY3LS4xNzc3MzQtLjQ4OTA3MmwxLjAxODU1LTUuMTAyNDktMy41NjA1NS0zLjU2NjhjLS4xMzAzNzEtLjEzMDU4Mi0uMTc4MjIzLS4zMjIyOTktLjEyNS0uNDk5MzQzLjA1MzIyMjctLjE3NjU1NS4xOTk3MDctLjMwOTU4My4zODAzNzEtLjM0NTc3NGw1LjEwMzUyLTEuMDIyNjUgMi4wMzc2LTQuNTkyMzljLjE2MTEzMy0uMzYxOTEzLjc1MjkzLS4zNjE5MTMuOTE0MDYzIDBsMi4wMzc2IDQuNTkyMzkgNS4xMDM1MiAxLjAyMjY1Yy4xODA2NjQuMDM2MTkxNS4zMjcxNDguMTY5MjE5LjM4MDM3MS4zNDU3NzQuMDUzMjIyNy4xNzcwNDQuMDA1MzcxMS4zNjg3NjEtLjEyNS40OTkzNDNsLTMuNTYwNTUgMy41NjY4IDEuMDE4NTUgNS4xMDI0OWMuMDM2NjIxMS4xODM0MDItLjAzMTczODMuMzcyMTg0LS4xNzc3MzQuNDg5MDcyLS4wOTAzMzIxLjA3MjM4My0uMjAxMTcyLjExMDA0Mi0uMzEyNS4xMTAwNDJ6bS00LjgyMTI5LTMuMTQ4MTZjLjA2OTMzNTkgMCAuMTM4NjcyLjAxNDE4My4yMDMxMjUuMDQzMDM4NGwzLjkzODQ4IDEuNzUzODEtLjg4MTgzNi00LjQxNjgxYy0uMDMyNzE0OC0uMTY0MzI4LjAxODU1NDctLjMzNDAzNi4xMzY3MTktLjQ1MjM5MmwzLjA4OTM2LTMuMDk0MzYtNC40NDA5Mi0uODkwMTExYy0uMTU5MTgtLjAzMTc4OTktLjI5Mjk2OS0uMTM4ODk3LS4zNTg4ODctLjI4NzU3NWwtMS42ODYwNC0zLjc5OTYtMS42ODYwNCAzLjc5OTZjLS4wNjU5MTguMTQ4Njc4LS4xOTk3MDcuMjU1Nzg1LS4zNTg4ODcuMjg3NTc1bC00LjQ0MDkyLjg5MDExMSAzLjA4OTM2IDMuMDk0MzZjLjExODE2NC4xMTgzNTYuMTY5NDM0LjI4ODA2NC4xMzY3MTkuNDUyMzkybC0uODgxODM2IDQuNDE2ODEgMy45Mzg0OC0xLjc1MzgxYy4wNjQ0NTMtLjAyODg1NTMuMTMzNzg5LS4wNDMwMzg0LjIwMzEyNS0uMDQzMDM4NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0uMDMyIC0uMDkpIiBmaWxsPSIjMDAwMDAwIi8+PC9zdmc+Cg==" />
          </ButtonComponent>
        </div>
      </div>
    );
  }
}

export default Array;
