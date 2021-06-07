import { Flex, Text } from "@chakra-ui/layout";
import Link from "next/link";
import { ReactNode } from "react";

interface SlideContentProps {
  image: string;
  bgPosition: "center" | "bottom" | "top";
  title: string;
  description: string;
  alt: string;
  href: string;
}

export function SlideContent({
  image,
  bgPosition,
  title,
  description,
  alt,
  href,
}: SlideContentProps) {
  return (
    <>
      <Flex
        w={["375px", "100%"]}
        h={["250", "450"]}
        bgImage={image}
        bgSize="cover"
        bgPosition={bgPosition}
        alt={alt}
        justify="center"
        alignItems="center"
        flexDirection="column"
      >
        <Link href={`/${href}`}>
          <Text
            color="black"
            fontWeight="bold"
            fontSize={["20px", "50px"]}
            cursor="pointer"
          >
            {title}
          </Text>
        </Link>

        <Text color="black" fontSize={["15px", "30px"]}>
          {description}
        </Text>
      </Flex>
    </>
  );
}
