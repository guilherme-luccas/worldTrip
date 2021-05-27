import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import React from "react";
import BannerContinent from "../components/BannerContinent";
import CityCard from "../components/CityCard";
import { Header } from "../components/Header";
// import { api } from "../services/api";

export default function NorthAmerica() {
  // const northAmerica = await api.get("/continentes/");

  return (
    <>
      <Header isVisible={true} />
      <BannerContinent img="./nyc.jpg">America do norte</BannerContinent>
      <Flex w="1160px" mx="auto" mt="80px">
        <Box>
          <Text
            color="#47585B"
            w="600px"
            h="180px"
            fontSize="24px"
            textAlign="justify"
          >
            A América do Norte reúne países com características bem distintas e
            com muita diversidade cultural. Conheça o que os destinos na América
            do Norte têm de melhor para te oferecer e comece a fazer suas malas.
          </Text>
        </Box>
        <Box>
          <Flex w="600px" h="160px" justify="space-around" alignItems="center">
            <Flex flexDirection="column" textAlign="center">
              <Text fontSize="48px" color="yellow.300" fontWeight="bold">
                3
              </Text>
              <Text color="#47585B">países</Text>
            </Flex>
            <Flex flexDirection="column" textAlign="center">
              <Text fontSize="48px" color="yellow.300" fontWeight="bold">
                3
              </Text>
              <Text color="#47585B">línguas</Text>
            </Flex>
            <Flex flexDirection="column" textAlign="center">
              <Text fontSize="48px" color="yellow.300" fontWeight="bold">
                8
              </Text>
              <Text color="#47585B">cidades +100</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Box w="1160px" mx="auto" mt="90px" mb="100px">
        <Text color="#47585B" mb="40px" fontSize="40px">
          Cidades +100
        </Text>
        <SimpleGrid columns={4} gap="4">
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
