import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content:center;
  width:400px;
  margin:40px auto;
  grid-template-columns:repeat(4,100px);
  grid-template-rows:minmax(120px,auto) repeat(5,100px);
  box-shadow:2px 2px 10px #333;
  border-radius:10px;

`

export const Screen = styled.div`
  grid-column : 1 / -1:
  background-color:rgba(60,64,67 ,0.75);
  display:flex;
  justify-content: space-around;
  flex-direction:column;
  padding:10px;
  word-wrap:break-word;
  word-breakL break-all;
  text-align:right;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  ${function({gridSpan}){
    if(gridSpan){
        return `grid-column:span ${gridSpan}`}
    }}
`

export const Previous = styled.div`
  color:black;
  font-size:1.5rem;
`


export const Current = styled.div`
  color:black;
  font-size:2.5rem;
  text-align:right;
  justify-content: right;
  align-content:right;
`

export const Button = styled.button`

  cursor:pointer;
  font-size: 2rem;
  border: 1px outset black;
  outline:none;
  background-color:DarkSlateGrey;
  &:hover{
    background-color:black;
  }
  color: white;

${function({gridSpan}){
if(gridSpan){
    return `grid-column:span ${gridSpan}`}
}}

${({operation}) => operation && `background-color: Orange`};
${({spOps}) => spOps && `background-color: gray`};


`
