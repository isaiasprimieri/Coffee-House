import {
    BackHandler,
    FlatList,
    StatusBar,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
  import {
    COLORS, FONTSIZE,
  } from '../../theme/theme';
  import HeaderBar from '../../components/HeaderBar';
  import EmptyListAnimation from '../../components/EmptyListAnimation';
import { Container, ImageHeaderBarContainerWithBack, ScreenTitle, ScrollView } from './CoffeesScreen.styles';
import { CoffeeList } from '../../models/CoffeeList';
import NewCoffeeCard from '../../components/CoffeeCard/NewCoffeeCard';
import GradientBGIcon from '../../components/GradientBGIcon';
  
  
  const CoffeesScreen = ({navigation, route}: any) => {
    const CoffeeListData: CoffeeList[] = route.params.item
    const screenTitle = "Seus cafés em " + (CoffeeListData[0].type === "CAPSULES" ? "cápsulas" : "grãos") + " estão aqui";	
    const BackHandler = () => {
        navigation.navigate('Home');
      };
    return (
      <Container>
        <StatusBar backgroundColor={COLORS.primaryBlackHex} />
     
            <ImageHeaderBarContainerWithBack>
            <TouchableOpacity
              onPress={() => {
                BackHandler();
              }}>
              <GradientBGIcon
                name="left"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
            </ImageHeaderBarContainerWithBack>


        <FlatList
              numColumns={2}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={
                <>
                    <ScreenTitle>
                        {screenTitle}
                    </ScreenTitle>
                </>
              }
              showsHorizontalScrollIndicator={false}
              data={CoffeeListData}
              keyExtractor={(item: CoffeeList) => item._id}
              columnWrapperStyle={{ 
                gap: 20,
              }}
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

      </Container>
    );
  };
  
  export default CoffeesScreen;
  