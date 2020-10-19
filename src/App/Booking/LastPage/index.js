import React from "react";
import { Row, Col, Result } from "antd";
import moment from "moment";

export default function LastPage({ resultData }) {
  localStorage.setItem("TtravelForm", JSON.stringify(resultData));

  console.log(resultData);

  console.log(
    "Giriş Tarihi",
    moment(resultData.checkInOut[0]).format("DD.MM.YYYY")
  );
  console.log(
    "Çıkış Tarihi",
    moment(resultData.checkInOut[1]).format("DD.MM.YYYY")
  );
  console.log("Oda Tipi:", resultData.roomType);
  console.log("Manzara Tipi:", resultData.sceneType);
  console.log("Kart İsmi:", resultData.name);
  console.log("Manzara Numarası:", resultData.number);
  console.log("Manzara CVC:", resultData.cvc);
  console.log("Manzara Geçerlilik Tarihi:", resultData.expiry);

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
