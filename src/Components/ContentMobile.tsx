import React from "react";
import { Col, Image, Row, Typography } from "antd";

const { Title } = Typography;

const ContentMobile = () => {
  return (
    <>
      <Row justify={"center"} style={{ marginTop: 10 }}>
        <Image
          style={{ maxWidth: "90%", maxHeight: "100%", marginLeft: "-15%" }}
          src="images/Group 53.png"
        />
      </Row>
      <hr />
      <Row justify={"center"}>
        <Title
          style={{ fontSize: "24px", fontWeight: 600, lineHeight: "36px" }}
        >
          How the app works
        </Title>
      </Row>
      <Row justify={"center"} align={"middle"}>
        <Col span={24}>
          <Title
            level={3}
            style={{
              color: "#FA4A0C",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "36px",
              margin: "auto",
              textAlign: "center",
            }}
          >
            Create an account
          </Title>
          <Title
            level={2}
            style={{
              margin: "auto",
              textAlign: "center",
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "57px",
              color: "#252B42",
            }}
          >
            Create/login to an existing account to get started
          </Title>
          <Title
            level={4}
            style={{
              maxWidth: 467,
              margin: "auto",
              textAlign: "center",
              color: "#737373",
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "38px",
              letterSpacing: 0.2,
            }}
          >
            An account is created with your email and a desired password{" "}
          </Title>
        </Col>
        <Col span={24} style={{ textAlign: "right" }}>
          <Image
            style={{ maxWidth: "90%", maxHeight: "100%" }}
            src={"images/Rectangle1.png"}
          />
        </Col>
      </Row>
      <Row justify={"center"} align={"middle"}>
        <Col span={24}>
          <Title
            level={3}
            style={{
              color: "#FA4A0C",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "36px",
              margin: "auto",
              textAlign: "center",
            }}
          >
            Explore varieties
          </Title>
          <Title
            level={2}
            style={{
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "57px",
              maxWidth: 480,
              margin: "auto",
              textAlign: "center",
            }}
          >
            Shop for your favorites meal as e dey hot.
          </Title>
          <Title
            level={4}
            style={{
              maxWidth: 467,

              color: "#737373",
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "38px",
              letterSpacing: 0.2,
              margin: "auto",
              textAlign: "center",
            }}
          >
            Shop for your favorite meals or drinks and enjoy while doing it.
          </Title>
        </Col>
        <Col span={24} style={{ textAlign: "right" }}>
          <Image
            style={{ maxWidth: "90%", maxHeight: "100%" }}
            src={"images/Rectangle2.png"}
          />
        </Col>
      </Row>
      <Row justify={"center"} align={"middle"}>
        <Col span={24}>
          <Title
            level={3}
            style={{
              color: "#FA4A0C",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "36px",
              margin: "auto",
              textAlign: "center",
            }}
          >
            Checkout
          </Title>
          <Title
            level={2}
            style={{
              margin: "auto",
              textAlign: "center",
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "57px",
            }}
          >
            When you done check out and get it delivered.
          </Title>
          <Title
            level={4}
            style={{
              maxWidth: 467,
              margin: "auto",
              textAlign: "center",
              color: "#737373",
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "38px",
              letterSpacing: 0.2,
            }}
          >
            When you done check out and get it delivered with ease.
          </Title>
        </Col>
        <Col span={24} style={{ textAlign: "right" }}>
          <Image
            style={{ maxWidth: "90%", maxHeight: "100%" }}
            src={"images/Rectangle3.png"}
          />
        </Col>
      </Row>
    </>
  );
};

export default ContentMobile;
