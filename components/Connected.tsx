import {
	Box,
	Button,
	Heading,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import beginnerModules from "../content/TutorialDashboard/TutorialsDashboardBeginner.json";

function Connected() {
	return (
		<VStack spacing={24} alignItems={"start"} px={14} py={20}>
			<VStack alignItems={"start"} spacing={20}>
				<Heading fontSize={24}>Beginner Modules</Heading>
				<SimpleGrid columns={{ base: 1, md: 3 }} spacing={"20"}>
					{beginnerModules &&
						beginnerModules.map((module) => (
							<Box
								display={"flex"}
								flexDirection={"column"}
								alignItems={"center"}
								key={module.url}
							>
								<Box
									mb={-4}
									ml={-4}
									backgroundColor={"#FB7185"}
									w={12}
									h={12}
									borderRadius={30}
									color={"gray.900"}
									fontWeight={"bold"}
									fontSize={20}
									textAlign={"center"}
									display={"flex"}
									flexDirection={"column"}
									justifyContent={"center"}
									alignSelf={"start"}
									zIndex={10}
								>
									{module.number}
								</Box>
								<Box
									w={"full"}
									key={module.url}
									border={"1px"}
									borderRadius={8}
									px={8}
									py={8}
									display={"flex"}
									flexDirection={"column"}
									alignItems={"center"}
									justifyContent={"space-between"}
									fontSize={20}
								>
									<Text py={8}>{module.title}</Text>
									<Text pb={8} fontWeight={"bold"}>
										Completed:{" "}
										<Text as={"span"} color={"green.500"}>
											0%
										</Text>
									</Text>
								</Box>
								<Button
									mt={-4}
									w={"50%"}
									backgroundColor={"#FB7185"}
									color={"gray.900"}
									fontSize={18}
									borderRadius={16}
									_hover={{
										backgroundColor: "#A62D3F",
										color: "white",
									}}
									_active={{
										backgroundColor: "#73363F",
										color: "white",
									}}
								>
									Start
								</Button>
							</Box>
						))}
				</SimpleGrid>
			</VStack>
			<VStack alignItems={"start"} spacing={8}>
				<Heading fontSize={24}>Intermediate Modules</Heading>
				<Text color={"gray.500"} fontSize={"20"}>
					Coming Soon...
				</Text>
			</VStack>
			<VStack alignItems={"start"} spacing={8}>
				<Heading fontSize={24}>Advanced Modules</Heading>
				<Text color={"gray.500"} fontSize={"20"}>
					Coming Soon...
				</Text>
			</VStack>
		</VStack>
	);
}

export default Connected;
