import { Image, Text, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TravelTypesProps {
  img: string;
  children: ReactNode;
}

export function TravelTypes({ img, children }: TravelTypesProps) {
  return (
    <>
      <Box w="158px" h="145px" align="center" justify="center">
        <Image src={img} w="85px" h="85px" />
        <Text fontWeight="600" color="gray.500" fontSize="24px" mt="4">
          {children}
        </Text>
      </Box>
    </>
  );
}
