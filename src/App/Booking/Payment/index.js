import React, { useState, useEffect } from "react";
import { Form, Input, Button, Row, Col, Card, Divider } from "antd";
import Cards from "react-credit-cards";
import NumberFormat from "react-number-format";

export default function Payment({
  formData,
  sendParent,
  backButton,
  previousData0,
  previousData1,
}) {
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [cvcErr, setCvcErr] = useState(null);
  const [cvcErrStatus, setCvcErrStatus] = useState(null);
  const [numErr, setNumErr] = useState(null);
  const [numErrStatus, setNumErrStatus] = useState(null);

  const [formPayment] = Form.useForm();

  function handleInputFocus(e) {
    setFocus(e.target.name);
  }

  useEffect(() => {
    const name =
      JSON.parse(localStorage.getItem("TtravelForm")) &&
      JSON.parse(localStorage.getItem("TtravelForm")).name;
    const number =
      JSON.parse(localStorage.getItem("TtravelForm")) &&
      JSON.parse(localStorage.getItem("TtravelForm")).number;
    const cvc =
      JSON.parse(localStorage.getItem("TtravelForm")) &&
      JSON.parse(localStorage.getItem("TtravelForm")).cvc;
    const expiry =
      JSON.parse(localStorage.getItem("TtravelForm")) &&
      JSON.parse(localStorage.getItem("TtravelForm")).expiry;
    if (formData != null) {
      formPayment.setFieldsValue(formData);
    } else if (
      name != null ||
      number != null ||
      cvc != null ||
      expiry != null
    ) {
      formPayment.setFieldsValue({
        name,
        number,
        cvc,
        expiry,
      });
      setName(name);
      setNumber(number);
      setCvc(cvc);
      setExpiry(expiry);
    }
  }, []);

  function limit(val, max) {
    if (val.length === 1 && val[0] > max[0]) {
      val = "0" + val;
    }

    if (val.length === 2) {
      if (Number(val) === 0) {
        val = "01";
      } else if (val > max) {
        val = max;
      }
    }

    return val;
  }

  function cardExpiry(val) {
    let month = limit(val.substring(0, 2), "12");
    let year = val.substring(2, 4);

    return month + (year.length ? "/" + year : "");
  }

  function handleSubmit(e) {
    if (e.number.split(" ").join("").length < 16) {
      setNumErr("Lütfen kart numarasının 16 hane olduğundan emin olunuz");
      setNumErrStatus("error");
      return;
    } else {
      setNumErr(null);
      setNumErrStatus(null);
    }

    if (e.cvc.split(" ").join("").length < 3) {
      setCvcErr("Lütfen güvenlik numarasının 3 hane olduğundan emin olunuz");
      setCvcErrStatus("error");
      return;
    } else {
      setCvcErr(null);
      setCvcErrStatus(null);
    }

    sendParent({ form: "form2", e });
  }

  return (
    <>
      <Row gutter={24} justify="center">
        <Col span="16">
          <Divider />
          <Card size="small" style={{ width: "100%" }}>
            <p>
              <span>Giriş Tarihi: </span>
              <span>{previousData0.checkInOut[0].format("DD.MM.YYYY")}</span>
            </p>
            <p>
              <span>Çıkış Tarihi: </span>
              <span>{previousData0.checkInOut[1].format("DD.MM.YYYY")}</span>
            </p>
            <p>
              <span>Oda Tipi: </span>
              <span>{previousData1.roomType}</span>
            </p>
            <p>
              <span>Manzara Tipi: </span>
              <span>{previousData1.sceneType}</span>
            </p>
          </Card>
        </Col>

        <Col>
          <div className="mt-2" id="PaymentForm">
            <Cards
              cvc={cvc}
              expiry={expiry}
              focused={focus}
              name={name}
              number={number}
            />
          </div>
        </Col>

        <Col span="15" style={{ marginTop: "24px" }}>
          <Form form={formPayment} name="basic" onFinish={handleSubmit}>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Lutfen kart ismini giriniz",
                },
              ]}
            >
              <Input
                placeholder="Ad Soyad"
                onChange={(e) => setName(e.target.value)}
                onFocus={handleInputFocus}
              />
            </Form.Item>
            <Form.Item
              name="number"
              validateStatus={numErrStatus}
              help={numErr}
              rules={[
                {
                  required: true,
                  message: "Lutfen kart numarasını girniz",
                },
              ]}
            >
              <NumberFormat
                className="ant-input"
                name="number"
                value={number}
                format="#### #### #### ####"
                onChange={(e) => setNumber(e.target.value)}
                onFocus={handleInputFocus}
                placeholder="Kart Numarası"
              />
            </Form.Item>
            <Form.Item
              name="cvc"
              validateStatus={cvcErrStatus}
              help={cvcErr}
              rules={[
                {
                  required: true,
                  message: "Lutfen kart güvenlik numarasını girniz",
                },
              ]}
            >
              <NumberFormat
                className="ant-input"
                name="cvc"
                value={cvc}
                format="###"
                min={3}
                onChange={(e) => setCvc(e.target.value)}
                onFocus={handleInputFocus}
                placeholder="CVC"
              />
            </Form.Item>
            <Form.Item
              name="expiry"
              rules={[
                {
                  required: true,
                  message: "Lutfen kart geçerlilik tarihini giriniz",
                },
              ]}
            >
              <NumberFormat
                className="ant-input"
                value={expiry}
                format={cardExpiry}
                placeholder="MM/YY"
                mask={["M", "M", "Y", "Y"]}
                onChange={(e) => setExpiry(e.target.value)}
                onFocus={handleInputFocus}
              />
            </Form.Item>

            <Form.Item>
              <Row justify="space-between">
                <Button onClick={backButton}>Geri</Button>
                <Button type="primary" htmlType="submit">
                  İlerle
                </Button>
              </Row>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}
