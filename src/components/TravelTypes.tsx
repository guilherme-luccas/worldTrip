import { Image, Text, Box, useBreakpointValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TravelTypesProps {
  img: string;
  children: ReactNode;
}

export function TravelTypes({ img, children }: TravelTypesProps) {
  const hiddenMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <Box
        w={["100%", "100%", "158px"]}
        h={["100%", "100%", "145px"]}
        align="center"
        justify="center"
      >
        <Image hidden={hiddenMobile} src={img} w="85px" h="85px" />
        <Text fontWeight="600" color="gray.500" fontSize="24px" mt="4">
          {children}
        </Text>
      </Box>
    </>
  );
}
