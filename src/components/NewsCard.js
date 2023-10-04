import {
  Box,
  Container,
  Flex,
  Spacer,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { useAuth } from "../AuthContext";

export default function NewsCard(props) {
  const { currentMember } = useAuth();
  return (
    <>
      <Container m="5" p="2" border="2px solid #2596be" bg="gray.200">
        <Flex>
          <Box bg="teal.400" borderRadius="5px" p="1">
            {props.Time}
          </Box>
          <Spacer></Spacer>
          <Text fontSize="xl" as="b">
            {props.Title}
          </Text>

          {currentMember && currentMember.authority === "admin" && (
            <>
              <Button mx="1" size="sm" bg="blue.400">
                編集
              </Button>
              <Button mx="1" size="sm" bg="red.400">
                ✖
              </Button>
            </>
          )}
        </Flex>
        <Image m="1" src={props.PICURL}></Image>
        <Text>{props.Content}</Text>
      </Container>
    </>
  );
}
