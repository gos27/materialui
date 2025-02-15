import React from "react";
import ImageAvatars from "./ImageAvatar";
import LetterAvatars from "./LetterAvatar";
import StringAvatar from "./StringAvatar";
import SizeAvatars from "./SizeAvatar";
import VariantAvatars from "./VariantAvatars";
import TotalAvatars from "./TotalAvatars";
import CustomSurplusAvatars from "./CustomSurplusAvatars";
import BadgeAvatars from "./BadgeAvatars";

const Avatar = () => {
  return (
    <section>
      <h3>Image Avatar</h3>
      <ImageAvatars />
      <LetterAvatars />
      <StringAvatar />
      <SizeAvatars />
      <VariantAvatars />
      <TotalAvatars />
      <CustomSurplusAvatars />
      <BadgeAvatars />
    </section>
  );
};

export default Avatar;
