import { faker } from "@faker-js/faker";
export class Users {
  username: string;
  password: string;
  email: string;
  constructor(data: any) {
    this.username =
      data.username === "generate" ? faker.internet.userName() : data.username;
    this.password =
      data.password === "generate" ? faker.internet.password() : data.password;
    this.email =
      data.email === "generate" ? faker.internet.email() : data.email;
  }
}
