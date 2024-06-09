import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: 'Title',
      firstName: 'First Name',
      lastName: 'Last Name',
      birthday: 'Birthday',
      nationality: 'Nationality',
      citizenId: 'Citizen ID',
      gender: 'Gender',
      mobilePhone: 'Mobile Phone',
      passportNo: 'Passport No',
      expectedSalary: 'Expected Salary',
      submit: 'Submit',
      reset: 'Reset',
    },
  },
  th: {
    translation: {
      title: 'คำนำหน้า',
      firstName: 'ชื่อจริง',
      lastName: 'นามสกุล',
      birthday: 'วันเกิด',
      nationality: 'สัญชาติ',
      citizenId: 'เลขบัตรประชาชน',
      gender: 'เพศ',
      mobilePhone: 'โทรศัพท์มือถือ',
      passportNo: 'เลขที่หนังสือเดินทาง',
      expectedSalary: 'เงินเดือนที่คาดหวัง',
      submit: 'ยืนยัน',
      reset: 'รีเซ็ต',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', 
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;