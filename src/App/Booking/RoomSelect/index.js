import React, { useEffect } from "react";
import { Row, Col, Form, Button, Radio, Card, Divider } from "antd";

const layout = {
  labelCol: { span: 24 },
};

export default function DateSelect({
  formData,
  sendParent,
  backButton,
  previousData0,
}) {
  const [formRoom] = Form.useForm();

  useEffect(() => {
    const roomType =
      JSON.parse(localStorage.getItem("TtravelForm")) &&
      JSON.parse(localStorage.getItem("TtravelForm")).roomType;
    const sceneType =
      JSON.parse(localStorage.getItem("TtravelForm")) &&
      JSON.parse(localStorage.getItem("TtravelForm")).sceneType;
    if (formData != null) {
      formRoom.setFieldsValue(formData);
    } else if (roomType != null || sceneType != null) {
      formRoom.setFieldsValue({
        roomType,
        sceneType,
      });
    }
  }, []);

  return (
    <>
      <Row gutter={24} justify="center">
        <Col xs={24}>
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
          </Card>
        </Col>

        <Col xs={24}>
          <Divider />
          <Form
            {...layout}
            form={formRoom}
            name="basic"
            onFinish={(e) => sendParent({ form: "form1", e })}
          >
            <Form.Item
              name="roomType"
              label="Oda Tipi:"
              rules={[
                {
                  required: true,
                  message: "Lutfen oda tipini seçiniz",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="Standart">Standart</Radio>
                <Radio value="Deluxe">Deluxe</Radio>
                <Radio value="Suit">Suit</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="sceneType"
              label="Manzara Tipi:"
              rules={[
                {
                  required: true,
                  message: "Lutfen manzara tercihinizi seçiniz",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="Deniz">Deniz</Radio>
                <Radio value="Kara">Kara</Radio>
              </Radio.Group>
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
