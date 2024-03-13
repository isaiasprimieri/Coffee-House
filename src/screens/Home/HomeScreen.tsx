import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { COLORS } from '../../theme/theme';
import HeaderBar from '../../components/HeaderBar';
import { BeanListData, CoffeeList, CoffeeListData } from '../../models/CoffeeList';
import { CategoryText, CoffeeTitle, CoffeeTitleContainer, Container, EmptyListContainer, FooterContainer, ScreenTitle, ScrollView } from './HomeScreen.styles';
import NewCoffeeCard from '../../components/CoffeeCard/NewCoffeeCard';


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

        {CoffeeListData.length && (
          <>
          { CoffeeListData.length && (
            <>
            <CoffeeTitleContainer>
              <CoffeeTitle>Cafés em cápsulas</CoffeeTitle>
            </CoffeeTitleContainer>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={CoffeeListData}
              keyExtractor={(item: CoffeeList) => item._id}
              contentContainerStyle={{
                gap: 20,
                paddingVertical: 10,
                paddingHorizontal: 30,
              }}
              renderItem={({ item }: { item: CoffeeList }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      console.log('Pressed')
                      navigation.push('Details', {
                        item: item,
                      });
                    }}>
                    <NewCoffeeCard
                      coffeeItem={item}
                    />
                  </TouchableOpacity>
                );
              }}
            />
        </>
          )}
          { BeanListData.length && (
            <>
             <CoffeeTitleContainer>
              <CoffeeTitle>Cafés em grãos</CoffeeTitle>
            </CoffeeTitleContainer>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={BeanListData}
              keyExtractor={(item: CoffeeList) => item._id}
              contentContainerStyle={{
                gap: 20,
                paddingVertical: 10,
                paddingHorizontal: 30,
              }}
              renderItem={({ item }: { item: CoffeeList }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      console.log('Pressed')
                      navigation.push('Details', {
                        item: item,
                      });
                    }}>
                    <NewCoffeeCard
                      coffeeItem={item}
                    />
                  </TouchableOpacity>
                );
              }}
            />
            </>
          )}

       
        </>
        ) 
        }
        <FooterContainer/>  

      </ScrollView>
      </Container>
    )
}

export default HomeScreen