import { Container, Title, Text, Card, Grid, Box } from "@mantine/core";
import ClientHighlights from "../../components/sections/ClientHighlights/ClientHighlights";
import FAQSection from "../../components/sections/FAQSection/FAQSection";

const InfluencerPage = () => {
  const features = [
    {
      title: "Results You Can Measure",
      desc: "Get social reach, on-ground engagement stats, and performance insights for each campaign or gig.",
    },
    {
      title: "Curated Talent Network",
      desc: "Access India's most vibrant social influencers and professional DJs-each vetted by Promotr for quality, reach, and reliability.",
    },
    {
      title: "Data-Driven Talent Matching",
      desc: "Book by genre, audience, campaign goal, or platform-find the faces and sounds that fit your event vision.",
    },
    {
      title: "End-to-End Event Support",
      desc: "From pre-event hype and live performances to post-event engagement, our talent drives both footfall and buzz.",
    },
    {
      title: "Seamless Booking & Management",
      desc: "Handle collaborations, schedules, and payments all on one platform. Instant confirmations, live updates, and zero stress.",
    },
  ];

  const steps = [
    {
      num: "1",
      title: "Share Your Needs:",
      desc: "Specify your event, target audience, type of influencer, or DJ vibe required.",
      img: "/whatsapp-image-2025-11-07-at-10-30-34-am-2.png",
    },
    {
      num: "2",
      title: "Browse & Select:",
      desc: "Review top-matched influencer and DJ profiles, with portfolios and past brand partnerships.",
      img: "/whatsapp-image-2025-11-07-at-10-19-12-am-2.png",
    },
    {
      num: "3",
      title: "Book & Collaborate:",
      desc: "Confirm instantly, coordinate brand briefings, and lock schedules on the spot.",
      img: "/whatsapp-image-2025-11-07-at-10-22-59-am-2.png",
    },
    {
      num: "4",
      title: "Track & Optimize:",
      desc: "Access live impact reports (stories, posts, streams, crowd engagement, etc.).",
      img: "/whatsapp-image-2025-11-07-at-10-24-35-am-2.png",
    },
  ];

  const idealFor = [
    "Brand launches seeking maximum social buzz",
    "Corporate parties, offsites, and celebrations",
    "Lifestyle, F&B, and retail activations",
    "Festival and seasonal entertainment",
    "Nightlife, weddings, and live concert events",
  ];

  return (
    <Box>
      {/* Hero */}
      <Box
        style={{
          background:
            "radial-gradient(50% 50% at 50% 23%, rgba(66,3,0,1) 26%, rgba(8,1,1,1) 84%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "2rem 0",
        }}
      >
        <Container size="xl" style={{ width: "100%", maxWidth: "1400px" }}>
          <Grid align="center" gutter="xl">
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Title
                order={1}
                c="#ff6f00"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 700,
                  marginBottom: "2rem",
                  lineHeight: 1.1,
                  whiteSpace: "nowrap",
                }}
              >
                Promotr Influencers & DJs
              </Title>
              <Title
                order={2}
                c="white"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                  fontWeight: 500,
                  lineHeight: 1.3,
                }}
              >
                Amplify Your Event.
                <br />
                Create Unforgettable Experiences.
              </Title>
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, md: 7 }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/dj-girl-cuate-1.png"
                alt="DJ"
                style={{
                  width: "100%",
                  maxWidth: "700px",
                  height: "auto",
                  transform: "scaleX(-1)",
                }}
              />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Why Choose */}
      <Box bg="white" py={{ base: 40, md: 80 }}>
        <Container size="xl">
          <Title
            order={2}
            ta="center"
            mb={60}
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)", fontWeight: 700 }}
          >
            Why Choose Promotr for Influencers & DJs?
          </Title>
          <Box
            style={{
              position: "relative",
              maxWidth: "1400px",
              margin: "0 auto",
              padding: "2rem 0",
            }}
          >
            <Grid
              hiddenFrom="base"
              visibleFrom="md"
              align="center"
              style={{ minHeight: "800px" }}
            >
              {/* Left Column */}
              <Grid.Col
                span={3}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  marginTop: "-2rem",
                  position: "relative",
                }}
              >
                <Box
                  style={{
                    position: "relative",
                    width: "335px",
                    height: "272px",
                  }}
                >
                  <img
                    src="/vector1.svg"
                    alt=""
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Box
                    style={{
                      position: "relative",
                      zIndex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      padding: "1.5rem 2rem",
                    }}
                  >
                    <Text fw={600} size="xl" mb="xs" c="black" ta="center">
                      {features[0].title}
                    </Text>
                    <Text size="sm" c="#5a0400" ta="center" lh={1.3}>
                      {features[0].desc}
                    </Text>
                  </Box>
                  <img
                    src="/arrow1.svg"
                    alt=""
                    style={{
                      position: "absolute",
                      right: "-100px",
                      top: "40%",
                      width: "100px",
                      height: "auto",
                    }}
                  />
                </Box>
                <Box
                  style={{
                    position: "relative",
                    width: "365px",
                    height: "273px",
                    marginTop: "100px",
                  }}
                >
                  <img
                    src="/vector2.svg"
                    alt=""
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Box
                    style={{
                      position: "relative",
                      zIndex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      padding: "1.5rem 2rem",
                    }}
                  >
                    <Text fw={600} size="xl" mb="xs" c="black" ta="center">
                      {features[4].title}
                    </Text>
                    <Text size="sm" c="#5a0400" ta="center" lh={1.3}>
                      {features[4].desc}
                    </Text>
                  </Box>
                  <img
                    src="/arrow2.svg"
                    alt=""
                    style={{
                      position: "absolute",
                      right: "-80px",
                      top: "20%",
                      width: "80px",
                      height: "auto",
                    }}
                  />
                </Box>
              </Grid.Col>

              {/* Center Column - Character */}
              <Grid.Col
                span={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="/image-6.png"
                  alt="Character"
                  style={{ width: "100%", maxWidth: "643px", height: "auto" }}
                />
              </Grid.Col>

              {/* Right Column */}
              <Grid.Col
                span={3}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  marginTop: "-3rem",
                  position: "relative",
                }}
              >
                <Box
                  style={{
                    position: "relative",
                    width: "342px",
                    height: "265px",
                  }}
                >
                  <img
                    src="/vector3.svg"
                    alt=""
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Box
                    style={{
                      position: "relative",
                      zIndex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      padding: "1.5rem 2rem",
                    }}
                  >
                    <Text fw={600} size="xl" mb="xs" c="black" ta="center">
                      {features[1].title}
                    </Text>
                    <Text size="sm" c="#420300" ta="center" lh={1.3}>
                      {features[1].desc}
                    </Text>
                  </Box>
                  <img
                    src="/arrow3.svg"
                    alt=""
                    style={{
                      position: "absolute",
                      left: "-160px",
                      top: "60%",
                      width: "140px",
                      height: "auto",
                    }}
                  />
                </Box>
                <Box
                  style={{
                    position: "relative",
                    width: "335px",
                    height: "297px",
                  }}
                >
                  <img
                    src="/vector4.svg"
                    alt=""
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Box
                    style={{
                      position: "relative",
                      zIndex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      padding: "1.5rem 2rem",
                    }}
                  >
                    <Text fw={600} size="xl" mb="xs" c="black" ta="center">
                      {features[2].title}
                    </Text>
                    <Text size="sm" c="#330d0b" ta="center" lh={1.3}>
                      {features[2].desc}
                    </Text>
                  </Box>
                  <img
                    src="/arrow4.svg"
                    alt=""
                    style={{
                      position: "absolute",
                      left: "-130px",
                      top: "50%",
                      width: "120px",
                      height: "auto",
                    }}
                  />
                </Box>
                <Box
                  style={{
                    position: "relative",
                    width: "334px",
                    height: "300px",
                  }}
                >
                  <img
                    src="/vector5.svg"
                    alt=""
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Box
                    style={{
                      position: "relative",
                      zIndex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      padding: "1.5rem 2rem",
                    }}
                  >
                    <Text fw={600} size="xl" mb="xs" c="black" ta="center">
                      {features[3].title}
                    </Text>
                    <Text size="sm" c="#5a0400" ta="center" lh={1.3}>
                      {features[3].desc}
                    </Text>
                  </Box>
                  <img
                    src="/arrow5.svg"
                    alt=""
                    style={{
                      position: "absolute",
                      left: "-150px",
                      bottom: "65%",
                      width: "100px",
                      height: "auto",
                    }}
                  />
                </Box>
              </Grid.Col>
            </Grid>

            {/* Mobile View - Stacked Cards */}
            <Box hiddenFrom="md" style={{ width: "100%", marginTop: "400px" }}>
              {features.map((f, i) => (
                <Card
                  key={i}
                  shadow="sm"
                  padding="lg"
                  radius="xl"
                  mb="md"
                  style={{
                    background: [
                      "#7ef587",
                      "#c8f587",
                      "#d4f587",
                      "#87c8f5",
                      "#d4a8f5",
                    ][i],
                  }}
                >
                  <Text fw={700} size="lg" mb="xs" c="black">
                    {f.title}
                  </Text>
                  <Text size="sm" c="dimmed">
                    {f.desc}
                  </Text>
                </Card>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* How It Works */}
      <Box
        bg="linear-gradient(180deg, #420300 0%, #080101 100%)"
        py={{ base: 40, md: 80 }}
      >
        <Container size="xl">
          <Title
            order={2}
            c="white"
            ta="center"
            mb={60}
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700 }}
          >
            How It Works
          </Title>
          <Grid gutter="xl">
            {steps.map((s, i) => (
              <Grid.Col
                key={i}
                span={{ base: 12, sm: 6 }}
                style={{ position: "relative" }}
              >
                <Box ta="center">
                  <Box
                    w={70}
                    h={70}
                    bg="#fbbc04"
                    style={{
                      borderRadius: "50%",
                      margin: "0 auto 1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text size="2.5rem" fw={800} c="#5a0400">
                      {s.num}
                    </Text>
                  </Box>

                  {(i === 0 || i === 2) && (
                    <Box
                      hiddenFrom="base"
                      visibleFrom="sm"
                      style={{
                        position: "absolute",
                        top: "40px",
                        left: "calc(50% + 35px)",
                        right: "calc(-50% + 35px)",
                        height: "auto",
                        zIndex: 1,
                      }}
                    >
                      <img
                        src="/arrow-2.svg"
                        alt=""
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Box>
                  )}

                  <Title order={3} c="#ff6f00" size="2rem" mb="sm" fw={700}>
                    {s.title}
                  </Title>
                  <Text
                    c="white"
                    mb="lg"
                    size="lg"
                    style={{
                      maxWidth: "500px",
                      margin: "0 auto 1.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    {s.desc}
                  </Text>
                  <Box
                    bg="white"
                    p="lg"
                    style={{
                      borderRadius: "50px",
                      width: "100%",
                      maxWidth: "400px",
                      height: "350px",
                      margin: "0 auto",
                      position: "relative",
                      overflow: "hidden",
                      border: "3px solid #87CEEB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={s.img}
                      alt={`Step ${s.num}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "40px",
                      }}
                    />
                  </Box>
                </Box>
              </Grid.Col>
            ))}
          </Grid>

          <Box
            mt={60}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Box
              component="button"
              style={{
                background: "#fbbc04",
                color: "#330d0b",
                border: "none",
                padding: "1rem 2.5rem",
                borderRadius: "10px",
                fontSize: "1.5rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Book Influencers & DJs Now
            </Box>
            <Box
              component="button"
              style={{
                background: "transparent",
                color: "white",
                border: "2px solid #ff6e1f",
                padding: "1rem 2.5rem",
                borderRadius: "10px",
                fontSize: "1.5rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Browse Event Jobs
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Ideal For */}
      <Box bg="white" py={{ base: 40, md: 80 }}>
        <Container size="xl">
          <Title
            order={2}
            ta="center"
            mb={60}
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)", fontWeight: 700 }}
          >
            Ideal For
          </Title>
          <Box
            style={{
              position: "relative",
              maxWidth: "1200px",
              margin: "0 auto",
              minHeight: "700px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Center Team Image */}
            <Box
              style={{
                position: "absolute",
                zIndex: 1,
                width: "100%",
                maxWidth: "750px",
              }}
            >
              <img
                src="/whatsapp-image-2025-11-07-at-9-59-46-am-1.png"
                alt="Team"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>

            {/* Bubbles with Group SVGs - Desktop Only */}
            <Box
              hiddenFrom="base"
              visibleFrom="md"
              style={{
                position: "relative",
                width: "100%",
                height: "700px",
                zIndex: 10,
              }}
            >
              {/* Top Left - Group1 */}
              <Box
                style={{
                  position: "absolute",
                  top: "50px",
                  left: "0",
                  width: "350px",
                }}
              >
                <img
                  src="/Group1.svg"
                  alt={idealFor[2]}
                  style={{ width: "100%", height: "auto" }}
                />
                <Text
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "80%",
                    textAlign: "center",
                    fontWeight: 700,
                    color: "#5a0400",
                    fontSize: "1.8rem",
                    lineHeight: 1.3,
                  }}
                >
                  {idealFor[2]}
                </Text>
              </Box>

              {/* Bottom Left - Group2 */}
              <Box
                style={{
                  position: "absolute",
                  bottom: "100px",
                  left: "30px",
                  width: "350px",
                }}
              >
                <img
                  src="/Group2.svg"
                  alt={idealFor[1]}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>

              {/* Top Right - Group3 */}
              <Box
                style={{
                  position: "absolute",
                  top: "80px",
                  right: "0",
                  width: "350px",
                }}
              >
                <img
                  src="/Group3.svg"
                  alt={idealFor[2]}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>

              {/* Middle Right - Group4 */}
              <Box
                style={{
                  position: "absolute",
                  top: "240px",
                  right: "20px",
                  width: "350px",
                }}
              >
                <img
                  src="/Group4.svg"
                  alt={idealFor[3]}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>

              {/* Bottom Right - Group5 */}
              <Box
                style={{
                  position: "absolute",
                  bottom: "80px",
                  right: "40px",
                  width: "350px",
                }}
              >
                <img
                  src="/Group5.svg"
                  alt={idealFor[4]}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            </Box>

            {/* Mobile View */}
            <Box hiddenFrom="md" style={{ width: "100%", marginTop: "450px" }}>
              {idealFor.map((item, i) => (
                <Card
                  key={i}
                  shadow="sm"
                  padding="lg"
                  radius="xl"
                  mb="md"
                  bg="rgba(245, 212, 203, 0.9)"
                >
                  <Text ta="center" fw={500} c="#5a0400">
                    {item}
                  </Text>
                </Card>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* The Promotr Advantage */}
      <Box
        bg="linear-gradient(180deg, #420300 0%, #080101 100%)"
        py={{ base: 40, md: 80 }}
      >
        <Container size="xl">
          <Title
            order={2}
            c="white"
            ta="center"
            mb={60}
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700 }}
          >
            The Promotr Advantage
          </Title>

          <Box style={{ maxWidth: "900px", margin: "0 auto" }}>
            {/* Item 1 */}
            <Grid align="center" mb={60}>
              <Grid.Col span={{ base: 12, md: 5 }}>
                <Box
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: "0 auto",
                  }}
                >
                  <img
                    src="/7b116ea6-bf29-480d-b232-29713b04a50d-1.png"
                    alt="Verified talent"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 7 }}>
                <Text
                  c="white"
                  size="xl"
                  fw={400}
                  ta={{ base: "center", md: "left" }}
                  style={{ fontSize: "1.5rem", lineHeight: 1.5 }}
                >
                  Top-tier social and music talent, all background-checked
                </Text>
              </Grid.Col>
            </Grid>

            {/* Item 2 */}
            <Grid align="center" mb={60}>
              <Grid.Col span={{ base: 12, md: 7 }} order={{ base: 2, md: 1 }}>
                <Text
                  c="white"
                  size="xl"
                  fw={400}
                  ta={{ base: "center", md: "right" }}
                  style={{ fontSize: "1.5rem", lineHeight: 1.5 }}
                >
                  Full creative and campaign support: from brief to execution
                </Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 5 }} order={{ base: 1, md: 2 }}>
                <Box
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: "0 auto",
                    background: "#87CEEB",
                  }}
                >
                  <img
                    src="/2247132-2.png"
                    alt="Campaign support"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid.Col>
            </Grid>

            {/* Item 3 */}
            <Grid align="center" mb={60}>
              <Grid.Col span={{ base: 12, md: 5 }}>
                <Box
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: "0 auto",
                    background: "white",
                  }}
                >
                  <img
                    src="/chatgpt-image-nov-10--2025--11-07-48-am-1.png"
                    alt="Event reports"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 7 }}>
                <Text
                  c="white"
                  size="xl"
                  fw={400}
                  ta={{ base: "center", md: "left" }}
                  style={{ fontSize: "1.5rem", lineHeight: 1.5 }}
                >
                  Event recap and digital reports included
                </Text>
              </Grid.Col>
            </Grid>

            {/* Item 4 */}
            <Grid align="center">
              <Grid.Col span={{ base: 12, md: 7 }} order={{ base: 2, md: 1 }}>
                <Text
                  c="white"
                  size="xl"
                  fw={400}
                  ta={{ base: "center", md: "right" }}
                  style={{ fontSize: "1.5rem", lineHeight: 1.5 }}
                >
                  Clear project fees-no hidden costs, surprise riders, or delays
                </Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 5 }} order={{ base: 1, md: 2 }}>
                <Box
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: "0 auto",
                    background: "#D8BFD8",
                  }}
                >
                  <img
                    src="/19199058-1.png"
                    alt="Clear pricing"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid.Col>
            </Grid>
          </Box>
        </Container>
      </Box>

      <ClientHighlights />
      
      <FAQSection />

      {/* Ready to Amplify Your Event */}
      <Box 
        bg="white" 
        py={{ base: 40, md: 50 }}
        style={{
          borderTop: "4px solid #0066cc",
          borderBottom: "4px solid #0066cc"
        }}
      >
        <Container size="xl">
          <Grid align="center" gutter="xl">
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Box mb="md">
                <Title
                  order={1}
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    marginBottom: "0.5rem",
                  }}
                >
                  Ready to Amplify Your Event?
                </Title>
                <Title
                  order={1}
                  c="#ff6f00"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                  }}
                >
                  Promotr.
                </Title>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  flexWrap: "wrap",
                  marginTop: "2rem",
                }}
              >
                <Box
                  component="button"
                  style={{
                    background: "#fbbc04",
                    color: "black",
                    border: "none",
                    padding: "1rem 2rem",
                    borderRadius: "12px",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  Get Started With Promotr
                </Box>
                <Box
                  component="button"
                  style={{
                    background: "white",
                    color: "black",
                    border: "3px solid #ff6e1f",
                    padding: "1rem 2rem",
                    borderRadius: "12px",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  Talk to Entertainment Experts
                </Box>
              </Box>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <img
                  src="/whatsapp-image-2025-11-09-at-1-39-16-pm-1.png"
                  alt="Mobile App"
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    height: "auto",
                  }}
                />
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        bg="linear-gradient(180deg, #420300 0%, #080101 100%)"
        py={{ base: 60, md: 80 }}
      >
        <Container size="xl">
          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 4 }}>
              {/* Removed duplicate Quick Links section from InfluencerPage */}
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 8 }}>
              <Title order={2} c="white" mb="md" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                Stay <Text component="span" c="#ff6f00">Connected</Text>
              </Title>
              <Text c="white" size="lg" mb="xl" style={{ fontSize: "1.2rem", lineHeight: 1.6 }}>
                Stay updated with the latest opportunities, trends, and event insights. Join our community of event professionals and businesses today.
              </Text>

              <Box style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
                <Box
                  component="a"
                  href="#"
                  style={{
                    color: "white",
                    fontSize: "2rem",
                    cursor: "pointer",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Box>
                <Box
                  component="a"
                  href="#"
                  style={{
                    color: "white",
                    fontSize: "2rem",
                    cursor: "pointer",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </Box>
                <Box
                  component="a"
                  href="#"
                  style={{
                    color: "white",
                    fontSize: "2rem",
                    cursor: "pointer",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Box>
                <Box
                  component="a"
                  href="#"
                  style={{
                    color: "white",
                    fontSize: "2rem",
                    cursor: "pointer",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Box>
              </Box>

              <Box style={{ display: "flex", gap: "0.5rem", maxWidth: "600px" }}>
                <Box
                  component="input"
                  type="email"
                  placeholder="Enter email address"
                  style={{
                    flex: 1,
                    padding: "1rem 1.5rem",
                    borderRadius: "50px",
                    border: "none",
                    background: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    fontSize: "1.1rem",
                    outline: "none",
                  }}
                />
                <Box
                  component="button"
                  style={{
                    background: "#ff6f00",
                    color: "white",
                    border: "none",
                    padding: "1rem 2.5rem",
                    borderRadius: "50px",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  Subscribe
                </Box>
              </Box>
            </Grid.Col>
          </Grid>

          <Box
            mt={60}
            pt={30}
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              textAlign: "center",
            }}
          >
            <Text c="white" size="lg" mb="xs" fw={600}>
              © 2025 Aquila Events & Marketing. All rights reserved.
            </Text>
            <Text c="white" size="md" style={{ fontStyle: "italic" }}>
              Built to empower events. Driven by people.
            </Text>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default InfluencerPage;
