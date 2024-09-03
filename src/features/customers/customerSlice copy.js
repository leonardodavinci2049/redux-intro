const initialStateCustomer = {
    fullName: "",
    nationalId: "",
    createdAt: "",
    updatedAt: "",
};


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
}