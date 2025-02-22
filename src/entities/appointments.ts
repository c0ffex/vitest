export interface AppointmentProps {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {
  private props: AppointmentProps;

  get customer() {
    return this.props.customer;
  }

  get startsAt() {
    return this.props.startsAt;
  }

  get endsAt() {
    return this.props.endsAt;
  }

  constructor(props: AppointmentProps) {
    const { startsAt, endsAt} = props
    
    if(endsAt<=startsAt)  {
      throw new Error('Invalid end date')
    }

    if (new Date() >= startsAt) {
      throw new Error('invalid start date')
    }
    this.props = props;
  }
}
