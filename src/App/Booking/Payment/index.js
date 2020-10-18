import React, { useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import Cards from "react-credit-cards";
import NumberFormat from "react-number-format";

export default function Payment({ formPayment, sendParent }) {
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function handleInputFocus(e) {
    setFocus(e.target.name);
  }

  return (
    <>
      <Row gutter={24} justify="center">
        <Col>
          <div className="mt-5" id="PaymentForm">
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
            // initialValues={{
            //   checkIn: min,
            // }}
            onFinish={(e) => sendParent(e)}
            // onFinishFailed={onFinishFailed}
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
              name="number"
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
              name="number"
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
                <Button type="primary" htmlType="submit">
                  Geri
                </Button>
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
