import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
  updatedAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    create: {
      prepare(fullName, nationalId) {
        return {
          payload: {
            fullName,
            nationalId,
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = new Date().toISOString();
        state.updatedAt = new Date().toISOString();
      },
    },

    update: {
      prepare(fullName) {
        return {
          payload: {
            fullName,
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.updatedAt = new Date().toISOString();
      },
    },
  },
});

export const { create: createCustomer, update: updateCustomer } =
  customerSlice.actions;

export default customerSlice.reducer;

/* 
export default function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case "customer/create":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalId: action.payload.nationalId,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };
        case "customer/update":
            return {
                ...state,
                fullName: action.payload.fullName,      
                updatedAt: new Date().toISOString(),
            };
        default:
            return state;
    }
}


// criar as function para o customerReducer

export function createCustomer(fullName, nationalId) {
  return { type: "customer/create", payload: { fullName, nationalId } };
}

export function updateCustomer(fullName) {
  return { type: "customer/update", payload: { fullName } };
} */
