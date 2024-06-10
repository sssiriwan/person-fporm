import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'antd';
import { RootState, AppDispatch } from '../app/store';
import { deletePerson } from '../features/personSlice';
import { useTranslation } from 'react-i18next';

const PersonTable: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const persons = useSelector((state: RootState) => state.person.persons);

 

  const columns = [
    {
      title: t('firstName'),
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: (a: any, b: any) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: t('gender'),
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: t('mobilePhone'),
      dataIndex: 'mobilePhone',
      key: 'mobilePhone',
    },
    {
      title: t('nationality'),
      dataIndex: 'nationality',
      key: 'nationality',
    },
    {
      title: t('manage'),
      key: 'manage',
      render: (index: number) => (
        <>
          <Button onClick={() => dispatch(deletePerson(index))}>{t('delete')}</Button>
        </>
      ),
    },
  ];

  return (<div className="table-container"><Table dataSource={persons} columns={columns} rowKey="citizenId" pagination={{ pageSize: 5 }} /></div>) 
};

export default PersonTable;
