import React from "react";
import { Row, Col, Result } from "antd";

export default function LastPage({ resultData }) {
  localStorage.setItem("TtravelForm", JSON.stringify(resultData));
  console.log(resultData);
  return (
    <>
      <Row gutter={24} justify="center">
        <Col xs={24}>
          <Result status="success" title="Kaydınız başarıyla alınmıştır" />
        </Col>
      </Row>
    </>
  );
}
