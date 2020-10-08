import React from "react";
import { Col, Divider, Image, Row, Typography } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import ContentMobile from "./ContentMobile";

const { Title } = Typography;

const Content = () => {
  const { xs, sm, md } = useBreakpoint();
  if ((!md && sm) || xs) {
    return <ContentMobile />;
  }
  return (
    <>
      <Row justify={"center"} style={{ marginTop: 56 }}>
        <Image width={548} height={640} src="images/Group 53.png" />
      </Row>
      <Divider style={{ maxWidth: "36" }} />
      <Row justify={"center"}>
        <Title style={{ fontSize: "44px", fontWeight: 600 }}>
          How the app works
        </Title>
      </Row>
      <Row justify={"center"} align={"middle"}>
        <Col span={12} style={{ textAlign: "right" }}>
          <Image src={"images/Rectangle1.png"} />
        </Col>
        <Col span={12}>
          <div style={{ maxWidth: 560 }}>
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
          </div>
        </Col>
      </Row>
      <Row justify={"center"} align={"middle"}>
        <Col offset={3} span={9}>
          <div style={{ maxWidth: 560 }}>
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
                margin: "auto",
                textAlign: "center",
                fontSize: "40px",
                fontWeight: 700,
                lineHeight: "57px",
                maxWidth: 480,
              }}
            >
              Shop for your favorites meal as e dey hot.
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
              Shop for your favorite meals or drinks and enjoy while doing it.
            </Title>
          </div>
        </Col>
        <Col span={12} style={{ textAlign: "center" }}>
          <Image src={"images/Rectangle2.png"} />
        </Col>
      </Row>
      <Row justify={"center"} align={"middle"}>
        <Col span={12} style={{ textAlign: "right" }}>
          <Image src={"images/Rectangle3.png"} />
        </Col>
        <Col span={12}>
          <div style={{ maxWidth: 560 }}>
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
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Content;
