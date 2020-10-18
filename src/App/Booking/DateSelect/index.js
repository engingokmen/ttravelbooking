import React from "react";
import moment from "moment";
import { Row, Col, DatePicker, Form, Button } from "antd";
const { RangePicker } = DatePicker;
import "moment/locale/tr";
import locale from "antd/es/date-picker/locale/tr_TR";

export default function DateSelect({ formDate, sendParent }) {
  // const [form] = Form.useForm();

  function disabledDate(current) {
    return current < moment().endOf("day");
  }

  const layout = {
    labelCol: { span: 24 },
  };

  // useEffect(() => {
  //   form.initialValues = {
  //     checkIn: moment().format("YYYY-MM-DD"),
  //   };
  // }, []);

  return (
    <>
      <Row gutter={24} justify="center">
        <Col span="16">
          <Form
            {...layout}
            style={{ marginTop: "42px" }}
            form={formDate}
            name="basic"
            // initialValues={{
            //   checkIn: min,
            // }}
            onFinish={(e) => sendParent(e)}
          >
            <Form.Item
              label="Giriş ve Çıkış Tarihleri:"
              name="checkIn"
              rules={[
                {
                  required: true,
                  message: "Lutfen giriş tarihi seçiniz",
                },
              ]}
            >
              <RangePicker
                className="custom-picker"
                locale={locale}
                disabledDate={disabledDate}
                format="DD-MM-YYYY"
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
