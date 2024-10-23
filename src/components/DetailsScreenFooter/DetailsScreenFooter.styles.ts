import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

export const PayButton = styled.TouchableOpacity`
  background-color: #d17842;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 72px;
  border-radius: 20px;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 18px;
  color: #ffffff;
`;
