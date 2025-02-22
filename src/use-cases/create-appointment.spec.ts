import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointment";
import { Appointment } from "../entities/appointments";
import { getFutureDate } from "../tests/utils/get-future-date";

describe('Create Appointment', () => {
  it('should be able to create an appointment', () => {
    const createAppointment = new CreateAppointment()
    
    const startsAt = getFutureDate('2022-08-12')
    const endsAt = getFutureDate('2022-08-13')

    expect(createAppointment.execute({
      customer: 'John Doe',
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Appointment)
  })
})