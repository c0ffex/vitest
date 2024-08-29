import { expect, test } from "vitest";
import { Appointment } from "./appointments";
import { getFutureDate } from "../tests/utils/get-future-date";

test("create an appointment", () => {
  const startsAt = getFutureDate('2022-08-10')
  const endsAt = getFutureDate('2022-08-11')

  const appointment = new Appointment({
    customer: "John Doe",
    startsAt: startsAt,
    endsAt: endsAt,
  });

  expect(appointment).instanceOf(Appointment);
  expect(appointment.customer).toEqual("John Doe");
  // expect({appointment.startsAt < appointment.endsAt)
});

test("cannot create an appointment with start date greater than end date", () => {
  const startsAt = getFutureDate('2022-08-12')
  const endsAt = getFutureDate('2022-08-11')

  expect(() => {
    return new Appointment({
      customer: "John Doe",
      startsAt,
      endsAt 
    });
  }).toThrow();
});

test("cannot create an appoint with start date less than actual date", () => {
  const startDate = new Date();
  const endDate = new Date();
  startDate.setDate(startDate.getDate()-1)

  endDate.setDate(startDate.getDate()+1);

  expect(() => {
    return new Appointment({
      customer: "John Doe",
      startsAt: startDate,
      endsAt: endDate,
    });
  }).toThrow();
});
