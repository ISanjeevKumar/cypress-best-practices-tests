import { registerPage } from "./RegisterPage";

class RealWorldApp {
  public get registerPage() {
    return registerPage;
  }
}

export const app = new RealWorldApp();
