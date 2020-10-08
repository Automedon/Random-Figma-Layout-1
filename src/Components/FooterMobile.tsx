import React from "react";
import styled from "styled-components";
import { Button, Col, Row, Typography } from "antd";
import {
  FacebookFilled,
  LinkedinFilled,
  TwitterOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const OrangeButton = styled(Button)`
  height: 64px;
  width: 142px;
  background-color: #fa4a0c !important;
  border-color: #fa4a0c !important;
  outline: none;
  color: white !important;
  font-weight: 700;
  line-height: 28px;
  font-size: 16px;
  border-radius: 10px;
`;

const OutLinedButton = styled(Button)`
  height: 64px;
  width: 142px;
  background-color: transparent !important;
  border-color: white !important;
  outline: none !important;
  color: white !important;
  font-weight: 700;
  line-height: 28px;
  font-size: 16px;
  border-radius: 10px;
`;

const FooterMobile = () => {
  return (
    <>
      <Row
        justify={"start"}
        align={"top"}
        style={{
          backgroundColor: `#252B42`,
        }}
      >
        <Col span={24} style={{ textAlign: "center", marginTop: 130 }}>
          <Title
            level={2}
            style={{
              padding: 10,
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "57px",
              color: "white",
            }}
          >
            Download the app now.
          </Title>
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <Title
            level={4}
            style={{
              padding: 10,
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "38px",
              color: "#BDBDBD",
            }}
          >
            Most calendars are designed for teams.
          </Title>
        </Col>
        <Col span={24} style={{ marginBottom: "130px", marginTop: "50px" }}>
          <Row
            justify={"space-around"}
            align={"middle"}
            style={{ width: 332, margin: "auto" }}
          >
            <Col>
              <OrangeButton>Buy Now</OrangeButton>
            </Col>
            <Col>
              <OutLinedButton>Try for free</OutLinedButton>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ margin: `60px auto` }}>
          <Row align={"middle"} justify={"center"}>
            <Col span={24}>
              <Row
                align={"middle"}
                justify={"space-around"}
                style={{ width: 171, margin: "auto" }}
              >
                <TwitterOutlined
                  style={{ fontSize: "33px", color: "#FA4A0C" }}
                />
                <FacebookFilled
                  style={{ fontSize: "33px", color: "#FA4A0C" }}
                />
                <LinkedinFilled
                  style={{ fontSize: "33px", color: "#FA4A0C" }}
                />
              </Row>
            </Col>
            <Col span={24} style={{ textAlign: "center" }}>
              <Text
                style={{
                  padding: 10,
                  fontFamily: "Roboto",
                  fontSize: "12px",
                  fontWeight: 700,
                  lineHeight: "18px",
                  color: "#5c5c5c",
                }}
              >
                Just type what's on your mind and we'll{" "}
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default FooterMobile;
