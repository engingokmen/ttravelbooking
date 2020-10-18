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
          <Form
            form={formPayment}
            name="basic"
            onFinish={(e) => sendParent({ form: "form2", e })}
          >
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
                format="##/##"
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
