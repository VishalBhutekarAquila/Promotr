import React from "react";
import { Box, Paper, Text, Image, Flex } from "@mantine/core";
import AquilaLogo from "../../../assets/logo/logo.svg";
import svg from "../../../assets/whychooseaquila/illustration.svg";

const WhyChooseAquila = () => {
  return (
    <Box
      style={{
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        width: "100vw",
        backgroundColor: "#FFF9F0",
      }}
    >
      <Paper
        bg="#FFF9F0"
        px={{ base: "xs", sm: "md" }}
        mih="100vh"
        radius={0}
        style={{
          overflow: "hidden",
        }}
      >
        <Flex justify="center" align="center" wrap="wrap" mt="md" mb="sm">
          <Text
            fw={800}
            ta="center"
            style={{
              whiteSpace: "nowrap",
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Why Choose
          </Text>

          <Image
            src={AquilaLogo}
            alt="Aquila logo"
            w={{ base: 128, sm: 160, md: 240 }}
            fit="contain"
          />
        </Flex>

        <Text
          ta="center"
          fz={{ base: "lg", md: "xl" }}
          maw={1000}
          mx="auto"
          mb={64}
          style={{
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
            color: "#333",
            lineHeight: 1.6,
          }}
        >
          The smarter, faster, and more reliable way to power your events with
          <br className="hidden md:block" /> the right people
        </Text>

        <Flex justify="center">
          <Image
            src={svg}
            alt="illustration"
            fit="contain"
            w={{ base: 800, md: 1000 }}
          />
        </Flex>
      </Paper>
    </Box>
  );
};

export default WhyChooseAquila;
