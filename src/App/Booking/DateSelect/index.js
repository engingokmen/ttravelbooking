import React, { useEffect } from "react";
import moment from "moment";
import { Row, Col, DatePicker, Form, Button } from "antd";
const { RangePicker } = DatePicker;
import "moment/locale/tr";
import locale from "antd/es/date-picker/locale/tr_TR";

export default function DateSelect({ formData, sendParent, backButton }) {
  const [formDate] = Form.useForm();

  useEffect(() => {
    const checkInOut =
      JSON.parse(localStorage.getItem("TtravelForm")) &&
      JSON.parse(localStorage.getItem("TtravelForm")).checkInOut;
    if (formData != null) {
      formDate.setFieldsValue(formData);
    } else if (checkInOut != null) {
      formDate.setFieldsValue({
        checkInOut: [moment(checkInOut[0]), moment(checkInOut[1])],
      });
    }
  }, []);

  function disabledDate(current) {
    return current < moment().endOf("day");
  }

  const layout = {
    labelCol: { span: 24 },
  };

  return (
    <>
      <Row gutter={24} justify="center">
        <Col xs={24}>
          <Form
            {...layout}
            style={{ marginTop: "42px" }}
            form={formDate}
            name="basic"
            onFinish={(e) => sendParent({ form: "form0", e })}
          >
            <Form.Item
              label="Giriş ve Çıkış Tarihleri:"
              name="checkInOut"
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
