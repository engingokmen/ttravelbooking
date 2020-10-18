import React, { useState, useEffect } from "react";
import { Steps, Row, Col } from "antd";
const { Step } = Steps;
import Date from "./DateSelect";
import Room from "./RoomSelect";
import Payment from "./Payment";
import LastPage from "./LastPage";

export default function Booking() {
  const [page, setPage] = useState(0);
  const [validForm0, setValidForm0] = useState(false);
  const [validForm1, setValidForm1] = useState(false);
  const [formData0, setFormData0] = useState(null);
  const [formData1, setFormData1] = useState(null);
  const [formData2, setFormData2] = useState(null);
  const [resultData, setResultData] = useState(null);

  useEffect(() => {}, []);

  function handleBackButton() {
    if (page !== 0) {
      setPage(page - 1);
    }
  }

  function handleForwardButton() {
    if (page !== 3) {
      setPage(page + 1);
    }
  }

  function stepChange() {
    return;
  }

  const onFinish = (values) => {
    if (values.form === "form0") {
      setValidForm0(true);
      setFormData0(values.e);
    } else if (values.form === "form1") {
      setValidForm1(true);
      setFormData1(values.e);
    } else {
      setFormData2(values.e);
      setResultData({
        checkInOut: formData0.checkInOut,
        roomType: formData1.roomType,
        sceneType: formData1.sceneType,
        name: values.e.name,
        number: values.e.number,
        expiry: values.e.expiry,
        cvc: values.e.cvc,
      });
    }

    handleForwardButton();
  };

  return (
    <Row justify="center">
      <Col xs={20} sm={12} md={9} lg={7}>
        <Steps size="small" current={page} onChange={stepChange}>
          <Step title="Tarih" onClick={() => setPage(0)} />
          <Step title="Oda" onClick={() => (validForm0 ? setPage(1) : null)} />
          <Step
            title="Ödeme"
            onClick={() => (validForm0 && validForm1 ? setPage(2) : null)}
          />
        </Steps>
        {page === 0 ? (
          <Date
            formData={formData0}
            sendParent={onFinish}
            backButton={handleBackButton}
          />
        ) : page === 1 ? (
          <Room
            formData={formData1}
            previousData0={formData0}
            sendParent={onFinish}
            backButton={handleBackButton}
          />
        ) : page === 2 ? (
          <Payment
            formData={formData2}
            previousData0={formData0}
            previousData1={formData1}
            sendParent={onFinish}
            backButton={handleBackButton}
          />
        ) : (
          <LastPage resultData={resultData} />
        )}
      </Col>
    </Row>
  );
}
