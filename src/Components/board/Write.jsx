import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Write({ content, setContent }) {
  const navigate = useNavigate();
  const state = useSelector((state) => state);

  //* ----------
  //* 오늘날짜
  //* ----------
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = yyyy + " - " + mm + " - " + dd;

  //* ----------
  //* state
  //* ----------
  const [inputData, setInputData] = useState({
    id: "",
    title: "",
    writer: "",
    created: formattedToday,
    content: "",
    like: false,
  });

  const writeHandler = () => {};

  return (
    <Container>
      <H2>등록하기</H2>
      <Header>
        <Info>
          <Created> 게시일 : {formattedToday}</Created>
          <Select>
            <div style={{ fontSize: "20px", padding: "0 20px" }}>구분</div>
            <select name="구분" style={{ width: "120px" }}>
              <option value="공지">공지</option>
              <option value="정보">정보</option>
              <option value="이벤트">이벤트</option>
            </select>
          </Select>
        </Info>
        <Title>
          <div style={{ width: "80px", fontSize: "22px" }}>제목</div>
          <Input></Input>
        </Title>
      </Header>
      <Main>
        <Textarea></Textarea>
        <Btn>수정 완료</Btn>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 700px;
  height: 800px;
  margin: 40px auto;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const H2 = styled.h2`
  display: flex;
  margin: 0 auto 30px auto;
  font-weight: bold;
`;

const Title = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 650px;
  border-radius: 5px;
  border: 1px solid #cfcfcf;
  padding: 8px 18px;
  margin: 20px 0;
`;

const Select = styled.div`
  display: flex;
`;

const Created = styled.div`
  color: gray;
  display: flex;
  font-size: 20px;
`;

const Info = styled.div`
  display: flex;
  margin: 40px 0 20px 0;
  flexdirection: row;
  align-items: center;
  justify-content: space-between;
  width: 670px;
}
`;

const Main = styled.div`
  width: 700px;
`;

const Textarea = styled.textarea`
  font-size: 20px;
  width: 650px;
  height: 500px;
  border: 1px solid #cfcfcf;
  margin: 20px;
  padding: 20px;
`;

const Btn = styled.button`
  width: 180px;
  height: 50px;
  background-color: #58c78f;
  color: white;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  font-size: 20px;
`;
