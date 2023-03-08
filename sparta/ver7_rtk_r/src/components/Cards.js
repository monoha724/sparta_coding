import { React, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { doneState, deleteTodo, editState, fixTodo } from "../redux/modules/todoModule";
import styled from 'styled-components';

const Body = styled.body`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 25px;
    padding: 25px;
`
const H2 = styled.h2`
    font-size: 25px;
    margin-bottom: 25px;
`
const H3 = styled.h3`
    height: 25px;
    margin-bottom: 25px;
    font-weight: bold;
`
const P = styled.p`
    height: 25px;
    margin-bottom: 25px;
`
const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
`
const Card = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    padding: 25px;
    min-height: 150px;
    position: relative;
`
const BtnDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
`
const Input = styled.input`
    width: 97%;
    height: 25px;
    margin-bottom: 10px;
`
const Button = styled.button`
    height: 30px;
    border: 1px solid ${(props) => props.bgColor};
    background-color: white;
    border-radius: 5px;
`

function Todos() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const todo = useSelector((state) => state.todo);
    const [fixTitle, setFixTitle] = useState("");
    const [fixNote, setFixNote] = useState("");

    return (
        <Body className="cards-container">
            <div>
                <H2>해야 할 일</H2>
                <CardWrapper className="notDone-container">
                    {todo.map((item) => !item.isDone &&
                        <Card key={item.id}>
                            {item.edit ? 
                                <div>
                                    <Input value={fixTitle} onChange={(event)=>setFixTitle(event.target.value)}/>
                                    <Input value={fixNote} onChange={(event)=>setFixNote(event.target.value)}/>
                                </div>
                            : 
                                <div>
                                    <H3 onClick={()=>{navigate(`/tododetail/${item.id}`)}}>{item.title}</H3>
                                    <P>{item.note}</P>
                                </div>
                            }
                            {item.edit ? 
                                <BtnDiv>
                                    <Button bgColor="#3498db" onClick={()=>{
                                        dispatch(fixTodo([item.id, fixTitle, fixNote]))
                                    }}>수정완료</Button>
                                    <Button bgColor="#27ae60" onClick={()=>{
                                        dispatch(doneState(item.id))
                                    }}>완료</Button>
                                    <Button bgColor="red" onClick={()=>{
                                        dispatch(deleteTodo(item.id))
                                    }}>삭제</Button>
                                </BtnDiv>
                            : 
                                <BtnDiv>
                                    <Button bgColor="#3498db" onClick={()=>{
                                        dispatch(editState(item.id))
                                        setFixTitle(item.title);
                                        setFixNote(item.note);
                                    }}>수정</Button>
                                    <Button bgColor="#27ae60" onClick={()=>{
                                        dispatch(doneState(item.id))
                                    }}>완료</Button>
                                    <Button bgColor="red" onClick={()=>{
                                        dispatch(deleteTodo(item.id))
                                    }}>삭제</Button>
                                </BtnDiv>
                            }
                        </Card>
                    )}
                </CardWrapper>
            </div>
            <div>
                <H2>끝난 일</H2>
                <CardWrapper className="Done-container">
                    {todo.map((item) => item.isDone &&
                        <Card key={item.id}>
                        <H3>{item.title}</H3>
                        <P>{item.note}</P>
                            <BtnDiv>
                                <Button bgColor="#27ae60" onClick={()=>{
                                    dispatch(doneState(item.id))
                                }}>복구</Button>
                                <Button bgColor="red" onClick={()=>{
                                    dispatch(deleteTodo(item.id))
                                }}>삭제</Button>
                            </BtnDiv>
                        </Card>
                    )}
                </CardWrapper>
            </div>
        </Body>
    )
}

export default Todos