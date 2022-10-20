import { useEffect, useState } from "react";
import {
	HStack,
	Heading,
	VStack,
	Text,
	SimpleGrid,
	Box,
	Link,
} from "@chakra-ui/react";
import { supabase } from "../lib/initSupabase";
import { BounceLoader } from "react-spinners";
import { TfiNewWindow } from "react-icons/tfi";

interface ProgramRegistry {
	id: number;
	name: string;
	description: string;
	github_link: string;
	creator_twitter: string;
	indexed: boolean;
	created_at: any;
}

function ProgramLibraryContent() {
	const [programsRegistry, setProgramsRegistry] =
		useState<Array<ProgramRegistry>>();

	useEffect(() => {
		fetchProgramLibrary();
	}, []);

	const fetchProgramLibrary = async () => {
		let { data, error } = await supabase
			.from("program_collection_registry")
			.select("*")
			.order("created_at", { ascending: false })
			.eq("indexed", true);

		if (error) {
			console.log("error", error);
		} else {
			data && setProgramsRegistry(data);
		}
	};
	return (
		<VStack bg={"gray.900"} minH="100vh" h="full" w="100%">
			<Heading alignSelf={"start"} ml={14} color={"#FB7185"}>
				Seahorse Program Library
			</Heading>
			<Box>
				{!programsRegistry && (
					<VStack mt={20}>
						<BounceLoader color="#FB7185" />
					</VStack>
				)}
				<SimpleGrid columns={2} spacing={20} mt={20} mb={20} w={"70vw"}>
					{programsRegistry &&
						programsRegistry.map((registry) => (
							<Box
								key={registry.id}
								border={"1px"}
								borderRadius={8}
								borderColor={"#878787"}
								px={8}
								py={8}
								display="flex"
								flexDirection={"column"}
								justifyContent={"space-between"}
							>
								<HStack alignContent={"center"} mb={4}>
									<Text
										fontSize={28}
										fontWeight={"bold"}
										color="#FB7185"
										mr={2}
									>
										{registry.name}
									</Text>
									<a
										href={registry.github_link}
										target={"_blank"}
										rel="noopener noreferrer"
									>
										<TfiNewWindow
											fontSize={"22"}
											color={"#FB7185"}
										/>
									</a>
								</HStack>
								<Text color={"#878787"} mb={8}>
									{registry.description}
								</Text>
								<Text cursor="pointer">
									<Link
										href={
											"https://twitter.com/" +
											registry.creator_twitter
										}
										target={"_blank"}
										rel="noopener noreferrer"
										_hover={{
											color: "#4db2f7",
											textDecoration: "underline",
										}}
									>
										{registry.creator_twitter}
									</Link>
								</Text>
							</Box>
						))}
				</SimpleGrid>
			</Box>
		</VStack>
	);
}

export default ProgramLibraryContent;
