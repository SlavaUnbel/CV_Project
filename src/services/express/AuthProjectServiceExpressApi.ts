import axios from 'axios';
import AuthProjectService from '../abstract/AuthProjectService';

export class AuthProjectServiceExpressApi extends AuthProjectService {
  public async register(username: string, password: string) {
    const response = await axios.post('http://localhost:8080/authProject/register', {
      username,
      password,
    });

    return response.data;
  }

  public async login(username: string, password: string) {
    const response = await axios.post('http://localhost:8080/authProject/login', {
      username,
      password,
    });

    return response.data;
  }
}
