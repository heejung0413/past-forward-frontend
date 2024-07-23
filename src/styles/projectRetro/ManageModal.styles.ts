import styled from 'styled-components';

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  width: 1000px;
  height: 600px;
  padding: 15px 25px;
`;

export const Title = styled.span`
  background-color: #111b47;
  color: white;
  font-size: medium;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 35px;
  width: 300px;
`;

export const Box = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin: 20px 0px;
  padding: 10px 20px;
  overflow-y: scroll;
  width: 90%;
  height: 90%;
`;

export const ListItem = styled.div`
  margin: 25px;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1.5fr 1fr 1.8fr 1fr 1fr;
  align-items: center;
`;

export const CheckBox = styled.input`
  width: 15px;
  height: 15px;
`;

export const RetroTitle = styled.span`
  padding-left: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RetroUserBox = styled.div`
  padding-left: 5px;
  display: flex;
  align-items: center;
`;
export const RetroUser = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RetroLeader = styled.span`
  background-color: #3360eb;
  color: white;
  padding: 2px;
  margin-left: 5px;
  border-radius: 2px;
  font-size: 8px;
`;

export const RetroBox = styled.div`
  align-self: center;
  padding-left: 5px;
`;

export const Button = styled.button`
  color: white;
  background-color: #4972a8;
  border-radius: 3px;
  padding: 5px 20px;
  margin-left: auto;
  margin-top: auto;
  width: 100px;
`;
