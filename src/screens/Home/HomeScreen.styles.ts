import {Dimensions} from 'react-native';
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

export const CoffeeTitleContainer = styled.TouchableOpacity`
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SeeMoreText = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
  color: #d3d3d3;
`;

export const SeeMoreContainer = styled.TouchableOpacity`
  padding: 0px;
`;

export const CoffeeTitle = styled.Text`
  font-size: 18px;
  font-family: 'Poppins-Medium';
  color: #d3d3d3;
`;

export const FooterContainer = styled.View`
  flex: 1;
  height: 80px;
`;

export const ScreenTitle = styled.Text`
  font-size: 28px;
  font-family: 'Poppins-SemiBold';
  color: #ffffff;
  padding-left: 30px;
`;

export const EmptyListContainer = styled.View`
  width: ${dimensionX}px;
  align-items: 'center';
  justify-content: 'center';
  padding-left: ${paddingVertical}px;
  padding-right: ${paddingVertical}px;
`;

export const CategoryText = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: #d3d3d3;
  margin-bottom: 4px;
`;

export const Flatlist = styled.FlatList.attrs({
  contentContainerStyle: {
    gap: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
})``;
