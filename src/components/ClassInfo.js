import {
  Box,
  Image,
  HStack,
  Tag,
  Center,
  Flex,
  Heading,
  Spacer,
  Link,
  Button,
} from "@chakra-ui/react";
import { useAuth } from "../AuthContext";
import axios from "axios";

export default function ClassInfo(props) {
  const { currentMember } = useAuth();

  const handleDelete = async (id) => {
    console.log("Trying to delete id= " + id);
    try {
      // Make a DELETE request to your server endpoint with the ID to delete
      await axios.delete(`https://vkfscl-4001.csb.app/delete/${id}`);
      console.log("Element deleted successfully");
    } catch (error) {
      console.error("Error deleting element:", error);
    }
  };

  return (
    <Center p="2">
      <Box minW="420px" maxW="800px" p="6" bg="gray.200">
        <Image
          src={props.PICURL}
          alt="pic"
          className="classImage"
          borderRadius="xl"
        />
        <HStack mt="5" spacing="13" bg="gray.300">
          {[[props.Time, props.Instructor]].map((item) => (
            <Tag key={item} variant="outline">
              {item}
            </Tag>
          ))}
        </HStack>
        <Flex p="1">
          <Heading fontSize="xl">{props.className}</Heading>
          <Spacer></Spacer>
          <Link href={`/login`}>
            <Button colorScheme="blue" h="5">
              予約Home
            </Button>
          </Link>
          {currentMember && currentMember.authority === "admin" && (
            <Button
              onClick={() => handleDelete(props.id)}
              mx="1"
              size="sm"
              bg="red.400"
            >
              ✖
            </Button>
          )}
        </Flex>
      </Box>
    </Center>
  );
}
