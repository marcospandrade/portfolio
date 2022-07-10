export interface IExperience {
  id: number;
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
