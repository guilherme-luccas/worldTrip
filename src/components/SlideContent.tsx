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
        w="1240px"
        h="450"
        bgImage={image}
        bgSize="cover"
        bgPosition={bgPosition}
        alt={alt}
        justify="center"
        alignItems="center"
        flexDirection="column"
      >
        <Link href={`/${href}`}>
          <Text fontWeight="bold" fontSize="50px" cursor="pointer">
            {title}
          </Text>
        </Link>

        <Text color="black" fontSize="30px">
          {description}
        </Text>
      </Flex>
    </>
  );
}
