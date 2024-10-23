import {StatusBar} from 'react-native';
import React from 'react';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS} from '../../theme/theme';
import HeaderBar from '../../components/HeaderBar';
import EmptyListAnimation from '../../components/EmptyListAnimation';
import {
  Container,
  ItemContainer,
  ScrollView,
  ScrollViewInnerView,
} from './FrequentlyBuyScreen.styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FrequentlyBuyScreen = ({navigation}: any) => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <Container>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <ScrollViewInnerView style={{marginBottom: tabBarHeight}}>
          <ItemContainer>
            <HeaderBar title="Meus pedidos" />
            <EmptyListAnimation title={'Sem pedidos'} />
          </ItemContainer>
        </ScrollViewInnerView>
      </ScrollView>
    </Container>
  );
};

export default FrequentlyBuyScreen;
