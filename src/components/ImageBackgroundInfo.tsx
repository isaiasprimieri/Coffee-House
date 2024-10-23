import React from "react";
import { StyleSheet, Text, View, ImageProps, TouchableOpacity, ImageBackground } from "react-native";
import GradientBGIcon from "./GradientBGIcon";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";
import CustomIcon from "../models/CustomIcon";
import { CoffeeList } from "../models/CoffeeList";

interface ImageBackgroundInfoProps {
  coffeeItem: CoffeeList;
  favourite: boolean;
  average_rating: number;
  rating: number;
  BackHandler?: any;
}

const ImageBackgroundInfo: React.FC<ImageBackgroundInfoProps> = ({
  coffeeItem,
  favourite,
  average_rating,
  rating,
  BackHandler,
}) => {
  const { name, quantity, roasted, ingredient, type, image_url } = coffeeItem;
  const typeTitle = type === "CAPSULES" ? "Capsulas" : "Grãos";
  const CoffeeName = name.length > 12 ? name.substring(0, 12) + "..." : name;

  return (
    <View>
      <ImageBackground
        source={{ uri: image_url }}
        style={[
          styles.ItemBackgroundImage,
          {
            backgroundColor: "#E6E6E6",
          },
        ]}
      >
        <View style={styles.ImageHeaderBarContainerWithBack}>
          <TouchableOpacity
            onPress={() => {
              BackHandler();
            }}
          >
            <GradientBGIcon
              name="left"
              color={COLORS.primaryLightGreyHex}
              size={FONTSIZE.size_16}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // ToggleFavourite(favourite, type, id);
            }}
          >
            <GradientBGIcon
              name="like"
              color={favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex}
              size={FONTSIZE.size_16}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.ImageInfoOuterContainer}>
          <View style={styles.ImageInfoInnerContainer}>
            <View style={styles.InfoContainerRow}>
              <View>
                <Text style={styles.ItemTitleText}>{CoffeeName}</Text>
                <Text style={styles.ItemSubtitleText}>{quantity}</Text>
              </View>
              <View style={styles.ItemPropertiesContainer}>
                <View style={styles.ProperFirst}>
                  <CustomIcon
                    name={"beans"}
                    size={FONTSIZE.size_24}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text style={styles.PropertyTextFirst}>{roasted}</Text>
                </View>
                <View style={styles.ProperFirst}>
                  <CustomIcon
                    name={"drop"}
                    size={FONTSIZE.size_16}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text style={styles.PropertyTextLast}>{ingredient}</Text>
                </View>
              </View>
            </View>
            <View style={styles.InfoContainerRow}>
              <View style={styles.RatingContainer}>
                <CustomIcon
                  name={"star"}
                  color={COLORS.primaryOrangeHex}
                  size={FONTSIZE.size_20}
                />
                <Text style={styles.RatingText}>{rating}</Text>
              </View>
              <View style={styles.RoastedContainer}>
                <Text style={styles.RoastedText}>{typeTitle}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageHeaderBarContainerWithBack: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: SPACING.space_30,
  },
  ImageHeaderBarContainerWithoutBack: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: SPACING.space_30,
  },
  ImageInfoInnerContainer: {
    gap: SPACING.space_15,
    justifyContent: "space-between",
  },
  ImageInfoOuterContainer: {
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: BORDERRADIUS.radius_20 * 2,
    borderTopRightRadius: BORDERRADIUS.radius_20 * 2,
    paddingHorizontal: SPACING.space_30,
    paddingVertical: SPACING.space_24,
  },
  InfoContainerRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ItemBackgroundImage: {
    aspectRatio: 20 / 25,
    justifyContent: "space-between",
    width: "100%",
  },
  ItemPropertiesContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: SPACING.space_20,
  },
  ItemSubtitleText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
  },
  ItemTitleText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_24,
  },
  ProperFirst: {
    alignItems: "center",
    backgroundColor: COLORS.primaryBlackHex,
    borderRadius: BORDERRADIUS.radius_15,
    height: 55,
    justifyContent: "center",
    width: 55,
  },
  PropertyTextFirst: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
  },
  PropertyTextLast: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    marginTop: SPACING.space_2 + SPACING.space_4,
  },
  RatingContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: SPACING.space_10,
  },
  RatingCountText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
  },
  RatingText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
  },
  RoastedContainer: {
    alignItems: "center",
    backgroundColor: COLORS.primaryBlackHex,
    borderRadius: BORDERRADIUS.radius_15,
    height: 55,
    justifyContent: "center",
    width: 55 * 2 + SPACING.space_20,
  },
  RoastedText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
  },
});

export default ImageBackgroundInfo;
