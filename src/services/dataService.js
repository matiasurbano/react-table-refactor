import { faker } from "@faker-js/faker";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newRecord = () => {
  const statusChance = Math.random();
  return {
    siteId: Math.floor(Math.random() * 10000),
    name: faker.name.findName(),
    address: faker.address.countryCode(),
    phone: faker.phone.phoneNumber(),
    locales: "es_US",
    piName: "",
    piPhone: "N/A / N/A",
    default: "",
    status: statusChance > 0.66 ? "active" : "inactive"
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newRecord(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      };
    });
  };

  return makeDataLevel();
}
