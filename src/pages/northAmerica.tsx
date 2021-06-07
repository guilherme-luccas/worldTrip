import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import BannerContinent from "../components/BannerContinent";
import CityCard from "../components/CityCard";
import { Header } from "../components/Header";
import { api } from "../services/api";
import { Tooltip, useBreakpointValue } from "@chakra-ui/react";

import { InfoOutlineIcon } from "@chakra-ui/icons";

export default function NorthAmerica() {
  const [continente, setContinente] = useState({
    name: "",
    top100cities: 0,
    countries: 0,
    languages: 0,
  });
  useEffect(() => {
    async function loadContinent() {
      const northAmerica = await api.get("/continentes/1");
      const northAmericaData = northAmerica.data;

      // console.log(data);
      setContinente(northAmericaData);
    }
    loadContinent();
  }, []);
  // console.log(continente.name);
  return (
    <>
      <Header isVisible={true} />
      <BannerContinent img="./nyc.jpg">{continente.name}</BannerContinent>
      <Flex
        w={["100%", "100%", "768px", "1160px"]}
        mx="auto"
        mt="80px"
        flexDirection={["column", "column", "row"]}
      >
        <Box>
          <Text
            color="#47585B"
            w={["100%", "600px"]}
            h="180px"
            fontSize={["16px", "24px"]}
            textAlign="justify"
            p="4"
          >
            A América do Norte reúne países com características bem distintas e
            com muita diversidade cultural. Conheça o que os destinos na América
            do Norte têm de melhor para te oferecer e comece a fazer suas malas.
          </Text>
        </Box>
        <Box>
          <Flex
            w={["100%", "600px"]}
            h="160px"
            justify="space-around"
            alignItems="center"
          >
            <Flex flexDirection="column" textAlign="center">
              <Text fontSize="48px" color="yellow.300" fontWeight="bold">
                {continente.countries}
              </Text>
              <Text color="#47585B">países</Text>
            </Flex>
            <Flex flexDirection="column" textAlign="center">
              <Text fontSize="48px" color="yellow.300" fontWeight="bold">
                {continente.languages}
              </Text>
              <Text color="#47585B">línguas</Text>
            </Flex>
            <Flex flexDirection="column" textAlign="center">
              <Text fontSize="48px" color="yellow.300" fontWeight="bold">
                {continente.top100cities}
              </Text>
              <Text color="#47585B">
                cidades +100
                <Tooltip
                  hasArrow
                  label="As cidades +100 são as cidades que aquele continente possui que estão entre as 100 cidades mais visitadas do mundo."
                  aria-label="A tooltip"
                >
                  <InfoOutlineIcon fontSize="11" ml="2" />
                </Tooltip>
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Box w={["100%", "100%", "1160px"]} mx="auto" mt="90px" mb="100px">
        <Text
          color="#47585B"
          mb="40px"
          fontSize="40px"
          textAlign={["center", "left"]}
        >
          Cidades +100
        </Text>
        <SimpleGrid justifyItems="center" columns={[1, 2, 4]} gap="4">
          <CityCard
            cityName="Nova Iorque"
            country="E.U.A"
            img="nyc.jpg"
            flag="bandeiraUsa.png"
          />
          <CityCard
            cityName="Los Angeles"
            country="E.U.A"
            img="losAngeles.jpg"
            flag="bandeiraUsa.png"
          />
          <CityCard
            cityName="Toronto"
            country="Canadá"
            img="toronto.jpg"
            flag="bandeiraCanada.png"
          />
          <CityCard
            cityName="Cancún"
            country="México"
            img="cancun.jpg"
            flag="bandeiraMexico.png"
          />
        </SimpleGrid>
      </Box>
    </>
  );
}
