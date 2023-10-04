import { Box, Text, SimpleGrid } from "@chakra-ui/react";

const schduleBoxStyles = {
  bg: "gray.100",
  h: "50px",
  border: "1px solid"
};
export default function ScheduleForm() {
  return (
    <SimpleGrid columns={7} bg="gray.300" spacing="1" p="5px">
      <Box sx={schduleBoxStyles}>月曜日</Box>
      <Box sx={schduleBoxStyles}>火曜日</Box>
      <Box sx={schduleBoxStyles}>水曜日</Box>
      <Box sx={schduleBoxStyles}>木曜日</Box>
      <Box sx={schduleBoxStyles}>金曜日</Box>
      <Box sx={schduleBoxStyles}>土曜日</Box>
      <Box sx={schduleBoxStyles}>日曜日</Box>

      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>

      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>

      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
      <Box sx={schduleBoxStyles}></Box>
    </SimpleGrid>
  );
}
