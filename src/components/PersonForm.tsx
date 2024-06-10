import React from 'react';
import { Form, Input, DatePicker, Select, Radio, InputNumber, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { addPerson } from '../features/personSlice';
import { useTranslation } from 'react-i18next';

const { Option } = Select;

const PersonForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const onFinish = (values: any) => {
    dispatch(addPerson(values));
  };

  return (
    <Form onFinish={onFinish} layout="vertical" className='person-form' >
      <Form.Item label={t('title')} name="title" rules={[{ required: true }]}>
        <Select>
          <Option value="Mr">{t('Mr')}</Option>
          <Option value="Mrs">{t('Mrs')}</Option>
          <Option value="Ms">{t('Ms')}</Option>
        </Select>
      </Form.Item>
      <Form.Item label={t('firstName')} name="firstName" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label={t('lastName')} name="lastName" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label={t('birthday')} name="birthday" rules={[{ required: true }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label={t('nationality')} name="nationality" rules={[{ required: true }]}>
        <Select>
          <Option value="Thai">{t('Thai')}</Option>
          <Option value="French">{t('French')}</Option>
          <Option value="English">{t('English')}</Option>
        </Select>
      </Form.Item>
      <Form.Item label={t('citizenId')} name="citizenId" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label={t('gender')} name="gender" rules={[{ required: true }]}>
        <Radio.Group>
          <Radio value="Male">{t('Male')}</Radio>
          <Radio value="Female">{t('Female')}</Radio>
          <Radio value="Unspecified">{t('Unspecified')}</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label={t('mobilePhone')} name="mobilePhone" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label={t('passportNo')} name="passportNo" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label={t('expectedSalary')} name="expectedSalary" rules={[{ required: true }]}>
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">{t('submit')}</Button>
        <Button type="default" style={{ marginLeft: '10px' }}>{t('reset')}</Button>
      </Form.Item>
    </Form>
  );
};

export default PersonForm;