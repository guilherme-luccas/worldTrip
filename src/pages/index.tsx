import { Image } from "@chakra-ui/image";
import { Text, Box, Stack, Flex } from "@chakra-ui/layout";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import { SlideContent } from "../components/SlideContent";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { useBreakpointValue } from "@chakra-ui/react";

SwiperCore.use([Navigation]);

export default function Home() {
  const hiddenMobile = useBreakpointValue({ base: true, md: false });

  const [continentes, setContinentes] = useState([]);
  useEffect(() => {
    api.get("continentes").then((response) => setContinentes(response.data));
  }, []);
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
          w={["100%", "100%", "50%"]}
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Text fontSize={["30px", "30px", "36px"]}>
              5 Continentes, <br /> infinitas possibilidades.
            </Text>
            <Text fontSize={["14px", "14px", "20px"]} mt="6">
              Chegou a hora de tirar do papel a viagem que você
              <br /> sempre sonhou.
            </Text>
          </Box>
        </Flex>
        <Box w="50%" position="relative" hidden={hiddenMobile}>
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
      <Box
        w={["375px", "100%"]}
        maxWidth={1160}
        h={["100%", "100%", "145px"]}
        mx="auto"
        mt={["10px", "10px", "90px"]}
      >
        <Stack
          direction={["column", "column", "row"]}
          justify={["center", "space-between"]}
        >
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
        borderBottomColor="#47585B"
        mx="auto"
        hidden={hiddenMobile}
      ></Box>
      <Box
        w={["375px", "100%"]}
        h={["250px", "450px"]}
        mx="auto"
        mt={["20px", "20px", "90px"]}
        maxWidth={1160}
      >
        <Swiper navigation>
          {continentes.map((continente) => (
            <SwiperSlide>
              <SlideContent
                image={continente.image}
                bgPosition={continente.bgPosition}
                title={continente.title}
                description={continente.description}
                alt={continente.alt}
                href={continente.href}
              />
            </SwiperSlide>
          ))}
          ...
        </Swiper>
      </Box>
    </>
  );
}
