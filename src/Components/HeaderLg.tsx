import React from "react";
import styled from "styled-components";
import { Button, Col, Grid, Row, Typography } from "antd";
import HeaderMobile from "./HeaderMobile";

const { useBreakpoint } = Grid;
const { Text } = Typography;
const StyledText = styled(Text)`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.20000000298023224px;
  text-align: center;

  &:hover {
    color: orange;
  }
`;

const OrangeButton = styled(Button)`
  height: 68px;
  width: 236px;
  background-color: #fa4a0c !important;
  border-color: #fa4a0c !important;
  outline: none;
  color: white !important;
  font-weight: 700;
  line-height: 36px;
  font-size: 24px;
`;

const OutLinedButton = styled(Button)`
  height: 68px;
  width: 236px;
  background-color: transparent !important;
  border-color: white !important;
  outline: none !important;
  color: white !important;
  font-weight: 700;
  line-height: 36px;
  font-size: 24px;
`;

interface DesktopHeaderLightProps {}

const HeaderLg: React.FC<DesktopHeaderLightProps> = () => {
  const { xs, sm, md } = useBreakpoint();
  if ((!md && sm) || xs) {
    return <HeaderMobile />;
  }
  return (
    <>
      <Row style={{ height: 156 }}>
        <Col flex={6}>
          <Row justify={"center"} align={"middle"} style={{ height: "100%" }}>
            <Col>
              <img src="images/Bella Olonje logo 111 1.png" alt="" />
            </Col>
          </Row>
        </Col>

        <Col flex={11} offset={7}>
          <Row
            justify={"space-around"}
            align={"middle"}
            style={{ height: "100%" }}
          >
            <Button type="link">
              <StyledText>Home</StyledText>
            </Button>

            <Button type="link">
              <StyledText>Product</StyledText>
            </Button>

            <Button type="link">
              <StyledText>Faq</StyledText>
            </Button>

            <Button type="link">
              <StyledText>Contact</StyledText>
            </Button>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          backgroundImage: `url("./images/Rectangle 48.png")`,
          backgroundRepeat: `no-repeat `,
          backgroundSize: "cover",
          height: 674,
          width: "100%",
        }}
      >
        <Col span={24} style={{ color: "white" }}>
          <Row
            justify={"center"}
            align={"middle"}
            style={{
              marginTop: 73,
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "36px",
            }}
          >
            <Col>Food app</Col>
          </Row>
          <Row
            justify={"center"}
            align={"middle"}
            style={{
              fontSize: "58px",
              fontWeight: 700,
              lineHeight: "80px",
              paddingTop: "10px",
            }}
          >
            <Col>Why stay hungry when </Col>
          </Row>
          <Row
            justify={"center"}
            align={"middle"}
            style={{
              fontSize: "58px",
              fontWeight: 700,
              lineHeight: "80px",
              textAlign: "center",
            }}
          >
            <Col>you can order form Bella Onojie</Col>
          </Row>
          <Row
            justify={"center"}
            align={"middle"}
            style={{
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "38px",
              padding: "10px 88px 48px 88px",
            }}
          >
            <Col>Download the bella onoje’s food app now on</Col>
          </Row>
          <Row
            justify={"space-around"}
            align={"middle"}
            style={{ width: 600, margin: "auto" }}
          >
            <Col>
              <OrangeButton shape="round">Playstore</OrangeButton>
            </Col>
            <Col>
              <OutLinedButton shape="round">App store</OutLinedButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default HeaderLg;
