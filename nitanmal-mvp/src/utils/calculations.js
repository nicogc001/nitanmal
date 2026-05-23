export function money(value) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));
}

export function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

export function getTotalExpenses(data) {
  return (
    toNumber(data.rent) +
    toNumber(data.transport) +
    toNumber(data.food) +
    toNumber(data.lifestyle) +
    toNumber(data.other)
  );
}

export function getAvailable(data) {
  return toNumber(data.salary) - getTotalExpenses(data);
}

export function getHousingScenario(current, housing) {
  const normalized = {
    city: housing.city,
    salary: current.salary,
    rent: housing.rent,
    transport: housing.transport,
    food: housing.food,
    lifestyle: housing.lifestyle,
    other: housing.other,
    commuteMinutes: housing.commuteMinutes,
  };

  return {
    ...normalized,
    totalExpenses: getTotalExpenses(normalized),
    available: getAvailable(normalized),
  };
}

export function getJobScenario(job) {
  return {
    ...job,
    totalExpenses: getTotalExpenses(job),
    available: getAvailable(job),
  };
}

export function getTransportRecommendation(transportData) {
  const diff = toNumber(transportData.carCost) - toNumber(transportData.publicCost);
  const minutesSaved = toNumber(transportData.publicMinutes) - toNumber(transportData.carMinutes);
  const valuePerMinute = minutesSaved > 0 ? diff / (minutesSaved * 22) : 0;

  return {
    diff,
    minutesSaved,
    valuePerMinute,
    recommended:
      diff > 120 && minutesSaved < 35
        ? "Transporte público"
        : "Depende de prioridad de tiempo",
  };
}
