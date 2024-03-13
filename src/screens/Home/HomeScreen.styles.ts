import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const dimensionX = Dimensions.get('window').width - 30 * 2;
const paddingVertical = 36 * 3.6;

export const Container = styled.View`
  flex: 1;
  background-color: #000000;
`;

export const ScrollView = styled.ScrollView`
    flex-grow: 1;
`;

export const CoffeeTitleContainer = styled.View`
    margin-top: 30px;
    margin-left: 30px;
    alignItems: 'center';
`;

export const CoffeeTitle = styled.Text`
    font-size: 18px;
    font-family: 'Poppins-Medium';
    color: #D3D3D3;
`;

export const FooterContainer = styled.View`
    flex: 1;
    height: 80px;
`;

export const ScreenTitle = styled.Text`
  font-size: 28px;
  font-family: 'Poppins-SemiBold';
  color: #FFFFFF;
  padding-left: 30px;
`;

export const EmptyListContainer = styled.View`
    width: ${dimensionX}px;
    alignItems: 'center';
    justifyContent: 'center';
    paddingVertical: ${paddingVertical}px;
`;

export const CategoryText = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: 16px;
    color: #D3D3D3;
    margin-bottom: 4px;
`;

export const Flatlist = styled.FlatList.attrs({
    contentContainerStyle: {
        gap: 20,
        paddingVertical: 20,
        paddingHorizontal: 30,
    }
})``;