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

import ClassInfoCard from "../components/ClassInfoCard";
import axios from "axios";

export default function ClassMamagenent() {
  return (
    <Center p="1">
      <Box
        p="1"
        m="2"
        bg="gray.200"
        display="flex"
        flexWrap="wrap"
        justifyContent={"space-between"}
      >
        <Box
          minW="200px"
          flexBasis="calc(33.33% - 10px)"
          bg="blue.200"
          p="1"
          m="1"
          flex="1"
        >
          クラス一覧
          {/* {data.class.map((classItem) => {
            console.log(classItem);

            return (
              <ClassInfoCard
                className={classItem.className}
                Time={classItem.Time}
                Instructor={classItem.Instructor}
                PICURL={classItem.PICURL}
                key={classItem.id}
              />
            );
          })} */}
        </Box>
        <Box
          minW="200px"
          flexBasis="calc(33.33% - 10px)"
          bg="blue.200"
          p="1"
          m="1"
          flex="1"
        >
          予約済み
        </Box>
        <Box
          minW="200px"
          flexBasis="calc(33.33% - 10px)"
          bg="blue.200"
          p="1"
          m="1"
          flex="1"
        >
          受講済み
        </Box>
      </Box>
    </Center>
  );
}
