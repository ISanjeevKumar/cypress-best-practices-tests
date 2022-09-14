import { registerPage } from "./RegisterPage";

class RealWorldApp {
  public get RegisterPage() {
    return registerPage;
  }
}

export const app = new RealWorldApp();
