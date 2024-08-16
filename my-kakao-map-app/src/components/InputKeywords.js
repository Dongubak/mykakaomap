import React from 'react';
import styled from 'styled-components';

const InputKeywordsWrapper = styled.div`
   display: flex;

   input {
      width: 500px;
      height: 100px;
      font-size: 100px;
   }

   button {
      width: 300px;
      height: 100px;

      background: black;
      color: white;

      &:hover {
         background: white;
         color: black;
      }
   }
`;

const InputKeywords = ({onChange, keyword, onClick}) => {

   return(
      <InputKeywordsWrapper>
         <input type="text" onChange={onChange} value={keyword}></input>
         {/* <button onClick={onClick}>search</button> */}
      </InputKeywordsWrapper>
   )
}

export default InputKeywords;