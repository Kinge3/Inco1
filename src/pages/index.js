import React from "react";
import theme from "theme";
import { Theme, Link, Text, Button, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			sm-padding="40px 0 40px 0"
			background="linear-gradient(0deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) 100%),--color-dark url(https://live-production.wcms.abc-cdn.net.au/938406c9303e5eab5cd3efc35e103dc2) 50% 15%/cover"
			color="--light"
			font="--base"
			margin="50 0 0 0"
			position="relative"
			height="100vh"
			width="100vw"
		>
			<Override slot="SectionContent" sm-align-items="center" />
			<Box
				min-width="100px"
				min-height="50px"
				display="flex"
				flex-direction="row"
				align-items="center"
				justify-content="center"
			>
				<Text margin="0px 0px 0px 0px" position="relative" right="20%">
					XXX Votes
				</Text>
				<Button
					position="static"
					width="10%"
					display="inline-block"
					align-self="center"
					background="--color-darkL2"
				>
					Reveal
				</Button>
				<Text margin="0px 0px 0px 0px" position="relative" left="20%">
					XXX Votes{"\n\n"}
				</Text>
			</Box>
			<Box
				display="flex"
				width="1149.31px"
				md-flex-wrap="wrap"
				position="relative"
				align-self="auto"
				flex-direction="row"
				top="550px"
				left="auto"
				right="auto"
				bottom="auto"
				height="40px"
			>
				<Box
					width="48.5%"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					md-width="100%"
					padding="0px 0px 0px 0px"
					md-padding="0px 0px 0px 0px"
					md-margin="0px 0px 40px 0px"
					margin="0px 3% 0px 0px"
				>
					<Button border-width="10px" border-style="solid" border-color="#004d87">
						Vote
					</Button>
				</Box>
				<Box
					width="48.5%"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					md-width="100%"
					padding="0 0px 0 0px"
				>
					<Button background="--color-red" border-width="10px" border-style="solid" border-color="#9b290d">
						Vote
					</Button>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6570be338d4a0c002027a55a"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});