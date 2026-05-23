export const USER_ROLES = {
  BUYER: "comprador",
  OPERATIONS: "operaciones",
};

export const DEMO_USERS = [
  {
    id: 1,
    name: "Nico Comprador",
    email: "comprador@demo.com",
    password: "1234",
    role: USER_ROLES.BUYER,
  },
  {
    id: 2,
    name: "Laura Operaciones",
    email: "operaciones@demo.com",
    password: "1234",
    role: USER_ROLES.OPERATIONS,
  },
];

export const initialCurrent = {
  city: "Madrid",
  salary: 2450,
  rent: 900,
  transport: 120,
  food: 300,
  lifestyle: 250,
  other: 200,
  commuteMinutes: 45,
};

export const initialHousing = {
  city: "Valencia",
  rent: 700,
  transport: 60,
  food: 280,
  lifestyle: 230,
  other: 180,
  commuteMinutes: 55,
};

export const initialJob = {
  title: "Nuevo trabajo híbrido",
  city: "Madrid",
  salary: 2850,
  rent: 900,
  transport: 90,
  food: 310,
  lifestyle: 260,
  other: 200,
  commuteMinutes: 35,
  remoteDays: 3,
};

export const initialTransport = {
  carCost: 320,
  carMinutes: 45,
  publicCost: 82,
  publicMinutes: 70,
};
