import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";

interface CityCardProps {
  cityName: string;
  country: string;
  img: string;
  flag: string;
}

export default function CityCard({
  cityName,
  country,
  img,
  flag,
}: CityCardProps) {
  return (
    <>
      <Flex
        w="256px"
        h="279px"
        color="#47585B"
        flexDirection="column"
        borderWidth="2px"
        borderColor="yellow.300"
        borderRadius="10px"
      >
        <Box
          w="100%"
          h="173px"
          bgImage={img}
          bgSize="cover"
          bgPosition="center"
          borderRadius="8px 8px 0 0"
        />
        <Flex h="106px" w="100%">
          <Flex w="50%" flexDirection="column" justify="space-around" ml="20px">
            <Text fontWeight="semi-bold" fontSize="20">
              {cityName}
            </Text>
            <Text color="#999999">{country}</Text>
          </Flex>
          <Flex flex="1" justify="flex-end" mr="20px" alignItems="center">
            <Image src={flag} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
