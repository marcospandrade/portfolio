interface IExperience {
  id: 1;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export class Experience {
  experience: IExperience;

  constructor(data: IExperience) {
    this.experience = data;
  }
}
