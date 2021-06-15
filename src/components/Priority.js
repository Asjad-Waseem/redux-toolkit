import { react, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBlockText } from '../redux/blockItems';
// import {  } from '../store/index'
import MapData from "../data/data.json";
import styled from 'styled-components';

const Block = styled.div`
float: left;
display: flex;
align-items: center;
justify-content: center;
color: #ffffff;
text-align: center;
padding: 16px;
text-decoration: none;
background-color: blue;
border-radius: 5px;
margin-right: 25px;
margin-bottom: 20px;
padding:20px;
height: 120px;
width: 100px;
cursor: default;
font-size: 1rem;
`;

const Priority = () => {

  const blockData = useSelector((state) => state.blockItems.blockItems);
  const dispatch = useDispatch();

  const [ columnId, setColumnId ] = useState();
  const [ columnIndex, setColumnIndex ] = useState();

 const onBlockDataChange = (columnData, i) => {
   
  console.log(columnData);
  console.log(i);

    var text = prompt("Enter the text");

    const dataChange = {

      columnId: columnData.id,
      text: text,
      columnIndex: i

    }

    alert(JSON.stringify(dataChange));

    dispatch(updateBlockText(dataChange))

  }
  // const priorityData = useSelector((state) => state.priority);

  // const incrementHandler = () => {
  //   dispatch(priorityActions.increment());
  // };


  return (
    <main>
      <h1>Redux</h1>

      {blockData.row[3].column.map((columnData, i) => (
        <Block
          key={columnData.id}
          onClick = { () => { onBlockDataChange(columnData, i) } }
        >{columnData.text}</Block>
      ))}

    </main>
  );
};

export default Priority;
