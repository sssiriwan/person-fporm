import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Person {
  title: string;
  firstName: string;
  lastName: string;
  birthday: string;
  nationality: string;
  citizenId: string;
  gender: string;
  mobilePhone: string;
  passportNo: string;
  expectedSalary: number;
}

interface PersonState {
  persons: Person[];
}

const initialState: PersonState = {
  persons: JSON.parse(localStorage.getItem('persons') || '[]'),
};

const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<Person>) => {
      state.persons.push(action.payload);
      localStorage.setItem('persons', JSON.stringify(state.persons));
    },
    deletePerson: (state, action: PayloadAction<number>) => {
      state.persons.splice(action.payload, 1);
      localStorage.setItem('persons', JSON.stringify(state.persons));
    },
  },
});

export const { addPerson, deletePerson } = personSlice.actions;
export default personSlice.reducer;