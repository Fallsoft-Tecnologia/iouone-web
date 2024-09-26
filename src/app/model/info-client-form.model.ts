export class InfoClientForm {
  name: string;
  date: Date;
  phone: string;
  cpf: string;

  constructor(name: string, date: Date, phone: string, cpf: string) {
    this.name = name;
    this.date = date;
    this.phone = phone;
    this.cpf = cpf;
  }
}
