import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
	WalletModalProvider,
	WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

require("@solana/wallet-adapter-react-ui/styles.css");

function TutorialsDashboard() {
	const wallet = useWallet();

	return (
		<VStack bg={"gray.900"} minH="100vh" h="full" w="100%">
			<HStack
				justifyContent={"space-between"}
				alignSelf={"start"}
				px={14}
				color={"#FB7185"}
				w="full"
				display={"flex"}
				flexDirection={{ base: "column", md: "row" }}
				mt={{ base: 4 }}
			>
				<Heading mt={{ base: 6, md: 0 }}>Tutorials Dashboard</Heading>
				<WalletModalProvider>
					<WalletMultiButton
						style={{
							borderRadius: 30,
							background: "#FB7185",
							color: "#171923",
						}}
					/>
				</WalletModalProvider>
			</HStack>
			{wallet.publicKey && <div>connected</div>}
			{!wallet.publicKey && <div>not connected</div>}
		</VStack>
	);
}

export default TutorialsDashboard;