import React, { useState } from "react";
import { Steps, Row, Col, Form, Button } from "antd";
const { Step } = Steps;
import Date from "./DateSelect";
import Room from "./RoomSelect";
import Payment from "./Payment";

export default function Booking() {
  const [formDate] = Form.useForm();
  const [formRoom] = Form.useForm();
  const [formPayment] = Form.useForm();

  const [page, setPage] = useState(0);

  function handleBackButton() {
    if (page !== 0) {
      setPage(page - 1);
    }
  }

  function handleForwardButton() {
    if (page !== 2) {
      setPage(page + 1);
    }
  }

  function stepChange() {
    return;
  }

  function handleB() {
    console.log(JSON.stringify(formDate.getFieldsValue(), null, 2));
  }

  const onFinish = (values) => {
    console.log("valuesss", values);
    handleForwardButton();
  };

  return (
    <Row justify="center">
      <Col span="8">
        <Steps size="small" current={page} onChange={stepChange}>
          <Step title="Tarih" onClick={() => setPage(0)} />
          <Step title="Oda" onClick={() => setPage(1)} />
          <Step title="Ödeme" onClick={() => setPage(2)} />
        </Steps>
        {page === 0 ? (
          <Date formDate={formDate} sendParent={onFinish} />
        ) : page === 1 ? (
          <Room formDate={formRoom} sendParent={onFinish} />
        ) : (
          <Payment formDate={formPayment} sendParent={onFinish} />
        )}
      </Col>
    </Row>
  );
}
