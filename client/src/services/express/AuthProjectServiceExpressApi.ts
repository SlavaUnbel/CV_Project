import axios from "axios";
import AuthProjectService from "../abstract/AuthProjectService";

export class AuthProjectServiceExpressApi extends AuthProjectService {
  public async register(username: string, password: string, role: string) {
    return await axios
      .post("/authProject/register", {
        username,
        password,
        role,
      })
      .then((response) => response.data);
  }

  public async login(username: string, password: string) {
    return await axios
      .post("/authProject/login", {
        username,
        password,
      })
      .then((response) => {
        localStorage.setItem("jwtToken", response.data.token);
        console.log(response.data);
        return response.data;
      });
  }

  public async checkIfLoggedIn() {
    return await axios.get("/authProject/login");
  }

  public async logout() {
    localStorage.removeItem("jwtToken");
    return await axios.post(
      "/authProject/logout",
      {},
      { withCredentials: true }
    );
  }

  public async checkIfAuthenticated() {
    
    return await axios
      .get("/authProject/authenticated", {
        headers: {
          //@ts-ignore
          "X-Access-Token": localStorage.getItem("jwtToken"),
        },
      })
      .then((response) => response.data);
  }
}
