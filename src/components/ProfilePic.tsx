import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { COLORS, SPACING } from "../theme/theme";

const ProfilePic = () => {
  return (
    <View style={styles.ImageContainer}>
      <Image
        source={require("../assets/app_images/avatar.jpeg")}
        style={styles.Image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
  ImageContainer: {
    alignItems: "center",
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    height: SPACING.space_36,
    justifyContent: "center",
    overflow: "hidden",
    width: SPACING.space_36,
  },
});

export default ProfilePic;
