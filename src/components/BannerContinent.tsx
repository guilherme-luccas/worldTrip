import { Flex, Text } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface TravelTypesProps {
  img: string;
  children: ReactNode;
}
export default function BannerContinent({ img, children }: TravelTypesProps) {
  return (
    <>
      <Flex
        w="100%"
        bgImage={img}
        bgSize=""
        bgPosition="center"
        mx="auto"
        alignItems="center"
      >
        <Flex
          w="1160px"
          h="340px"
          mx="auto"
          justify="flex-end"
          flexDirection="column"
        >
          <Text fontWeight="600" color="white" fontSize="34px" mt="4">
            {children}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
