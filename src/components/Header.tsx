import { Flex, Image, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";

interface HeaderProps {
  isVisible: boolean;
}

export function Header({ isVisible = false }: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      h="100px"
      mx="auto"
      align="center"
      position="relative"
    >
      {isVisible && (
        <Link href="/">
          <Icon
            as={RiArrowLeftSLine}
            color="black"
            position="absolute"
            left="7.03vw"
            fontSize="22px"
            cursor="pointer"
          />
        </Link>
      )}

      <Image src="Logo.png" alt="logo" mx="auto" w="184px" h="46px" />
    </Flex>
  );
}
