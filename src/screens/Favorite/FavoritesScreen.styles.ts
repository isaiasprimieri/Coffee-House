import Styles from 'styled-components/native';

export const Container = Styles.View`
  flex: 1;
  background-color: #000;
`;

export const ScrollView = Styles.ScrollView`
  flex: 1;
  background-color: #000;
`;

export const ScreenTitle = Styles.Text`
  font-family: 'Poppins-Bold';
  font-size: 24px;
  color: #fff;
  align-self: center;
  margin-top: 20px;
`;

export const ImageHeaderBarContainerWithBack = Styles.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
    border-bottom-color: #333;

  justify-content: space-between;
  padding: 20px;
`;