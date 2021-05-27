import { Image } from "@chakra-ui/image";
import { Text, Box, Stack, Flex } from "@chakra-ui/layout";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

export default function Home() {
  return (
    <>
      <Header isVisible={false} />
      <Flex
        bgImage="Background.png"
        w="100%"
        maxWidth={1440}
        h="335px"
        mx="auto"
      >
        <Flex
          textAlign="left"
          w="50%"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Text fontSize="36px">
              5 Continentes, <br /> infinitas possibilidades.
            </Text>
            <Text fontSize="20px" mt="6">
              Chegou a hora de tirar do papel a viagem que você
              <br /> sempre sonhou.
            </Text>
          </Box>
        </Flex>
        <Box w="50%" position="relative">
          <Image
            src={"Airplane.png"}
            alt="aviao"
            position="absolute"
            left="50%"
            transform="translate(-50%)"
            bottom="-30px"
          />
        </Box>
      </Flex>
      <Box w="100%" maxWidth={1160} h="145px" mx="auto" mt="90px">
        <Stack direction="row" justify="space-between">
          <TravelTypes img="cocktail.png">vida noturna</TravelTypes>
          <TravelTypes img="surf.png">praia</TravelTypes>
          <TravelTypes img="building.png">moderno</TravelTypes>
          <TravelTypes img="museum.png">clássico</TravelTypes>
          <TravelTypes img="earth.png">e mais...</TravelTypes>
        </Stack>
      </Box>
      <Box
        w="90px"
        h="90px"
        borderBottomWidth="2px"
        borderBottomColor="#47585B  "
        mx="auto"
      ></Box>
      <Box w="1240px" h="450" mx="auto" mt="90px">
        <Swiper navigation>
          <SwiperSlide>
            <Flex
              w="1240px"
              h="450"
              bgImage="northAmerica.jpg"
              bgSize="cover"
              bgPosition="center"
              alt="america do norte"
              justify="center"
              alignItems="center"
              flexDirection="column"
            >
              <Link href="/northAmerica">
                <Text fontWeight="bold" fontSize="50px" cursor="pointer">
                  América do Norte
                </Text>
              </Link>

              <Text color="black" fontSize="30px">
                Riqueza natural
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Image w="1240px" h="450" src={"europe.jpg"} alt="europa" />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              w="1240px"
              h="450"
              src={"southAmerica.jpg"}
              alt="america do sul"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image w="1240px" h="450" src={"asia.jpg"} alt="asia" />
          </SwiperSlide>
          <SwiperSlide>
            <Image w="1240px" h="450" src={"africa.jpg"} alt="africa" />
          </SwiperSlide>
          <SwiperSlide>
            <Image w="1240px" h="450" src={"oceania.jpg"} alt="oceania" />
          </SwiperSlide>
          ...
        </Swiper>
      </Box>
    </>
  );
}
