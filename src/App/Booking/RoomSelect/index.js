import React from "react";
import { Row, Col, DatePicker, Form, Button, Radio } from "antd";

const layout = {
  labelCol: { span: 24 },
};

export default function DateSelect({ formRoom, sendParent }) {
  return (
    <>
      <Row gutter={24} justify="center">
        <Col span="16">
          <Form
            {...layout}
            style={{ marginTop: "42px" }}
            form={formRoom}
            name="basic"
            // initialValues={{
            //   checkIn: min,
            // }}
            onFinish={(e) => sendParent(e)}
            // onFinishFailed={onFinishFailed}
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
              name="sceenType"
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
