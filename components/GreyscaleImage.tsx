import Image from "next/image";

import React from "react";

interface Props {
  imagePath: string;
}

function GreyscaleImage({ imagePath }: Props) {
  console.log(imagePath);
  return (
    <Image
      alt=""
      src={
        imagePath
          ? `http://localhost:5001/files/file/${imagePath}`
          : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
      }
      width={500}
      height={500}
    ></Image>
  );
}

export default GreyscaleImage;
