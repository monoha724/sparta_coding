import { React, useState } from 'react'
import { useDispatch } from "react-redux";
import { newTodo } from "../redux/modules/todoModule";
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #bdc3c7;
    border-radius: 5px;
    margin-bottom: 25px;
`

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    padding: 25px;
`

const Input = styled.input`
    border: 0px;
    border-radius: 5px;
    width: 250px;
    height: 25px;
`

const Button = styled.button`
    width: 100px;
    height: 30px;
    background-color: white;
    border: 0px;
    border-radius: 5px;
    background: #16a085;
    color: white;
    font-weight: 1000;
`

function InputBanner() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    
    return (
        <Wrapper>
            <Form>
                <div>
                    <label htmlFor='title'>제목</label>&nbsp;
                    <Input
                        id='title'
                        value={title}
                        onChange={(event)=>{setTitle(event.target.value)}}
                    /> &nbsp;
                    <label htmlFor='note'>내용</label>&nbsp;
                    <Input
                        id='note'
                        value={note}
                        onChange={(event)=>{setNote(event.target.value)}}
                    /> &nbsp;
                </div>
                <div>
                    <Button onClick={(event)=>{
                        event.preventDefault();
                        dispatch(newTodo({title, note}));
                        setTitle("");
                        setNote("");
                    }}>작성</Button>
                </div>
            </Form>
        </Wrapper>
    )
}

export default InputBanner