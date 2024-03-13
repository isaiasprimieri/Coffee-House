import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { COLORS } from '../../theme/theme';
import HeaderBar from '../../components/HeaderBar';
import { BeanListData, CoffeeList, CoffeeListData } from '../../models/CoffeeList';
import { CategoryText, CoffeeTitle, CoffeeTitleContainer, Container, EmptyListContainer, FooterContainer, ScreenTitle, ScrollView, SeeMoreContainer, SeeMoreText } from './HomeScreen.styles';
import NewCoffeeCard from '../../components/CoffeeCard/NewCoffeeCard';
import CoffeeCarousel from '../../components/Carousel/Carousel';


const HomeScreen = ({navigation}: any) => {

    const [coffeeList, setCoffeeList] = useState<CoffeeList[]>([])

    async function getCoffeeList() {
      console.log(' getCoffeeList')
      const list = CoffeeListData
      setCoffeeList(list)
    }

    useEffect(() => {
      getCoffeeList()
    }, [])

    return (
      <Container>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        >
        <HeaderBar />

        <ScreenTitle>
            Encontre o café{'\n'}que mais combina{'\n'}com você
        </ScreenTitle>
        <CoffeeCarousel coffeeList={CoffeeListData} title="Cafés em capsulas" navigation={navigation} />

        <CoffeeCarousel coffeeList={BeanListData} title="Cafés em grãos" navigation={navigation} />
        
        <FooterContainer/>  

      </ScrollView>
      </Container>
    )
}

export default HomeScreen