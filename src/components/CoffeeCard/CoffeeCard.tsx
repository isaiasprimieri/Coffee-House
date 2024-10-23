import React from "react";
import { Dimensions, Image, ImageBackground, Linking } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "../../theme/theme";
import CustomIcon from "../../models/CustomIcon";
import {
  CardFooterRow,
  CardRatingContainer,
  CardRatingText,
  CardSubtitle,
  CardTitle,
  QuantityTitle,
  SocialImageView,
} from "./CoffeeCard.styles";
import { CoffeeList } from "../../models/CoffeeList";

const CARD_WIDTH = Dimensions.get("window").width * 0.32;
const CARD_HEIGHT = Dimensions.get("window").width * 0.32;

interface CoffeeCardProps {
  coffeeItem: CoffeeList;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffeeItem }) => {
  const { name, description, image_url, quantity, link } = coffeeItem;
  const renderItemView = CARD_WIDTH + SPACING.space_15 * 2;

  const coffeeLinkPressHandler = () => {
    Linking.openURL(link).catch(() => {
      console.error("Não foi possivel abrir o link");
    });
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        padding: SPACING.space_15,
        borderRadius: BORDERRADIUS.radius_25,
        width: CARD_WIDTH,
        minWidth: renderItemView,
      }}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
    >
      <ImageBackground
        source={{ uri: image_url }}
        style={{
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          borderRadius: BORDERRADIUS.radius_20,
          marginBottom: SPACING.space_15,
          overflow: "hidden",
          backgroundColor: "#E6E6E6",
        }}
        resizeMode="center"
      >
        <CardRatingContainer>
          <CustomIcon
            name={"star"}
            color={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_16}
          />
          <CardRatingText>5</CardRatingText>
        </CardRatingContainer>
      </ImageBackground>
      <CardTitle numberOfLines={1}>{name}</CardTitle>
      <QuantityTitle>{quantity}</QuantityTitle>
      <CardSubtitle numberOfLines={2}>{description}</CardSubtitle>
      <CardFooterRow>
        <SocialImageView onPress={() => console.log("liked")}>
          <Image
            source={require("../../assets/icons/heart-off.png")}
            style={{ width: 20, height: 20 }}
          />
        </SocialImageView>
        <SocialImageView onPress={() => coffeeLinkPressHandler()}>
          <Image
            source={require("../../assets/icons/store.png")}
            style={{ width: 20, height: 20 }}
          />
        </SocialImageView>
      </CardFooterRow>
    </LinearGradient>
  );
};

export default CoffeeCard;
