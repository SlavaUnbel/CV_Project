import axios from 'axios';
import AuthProjectService from '../abstract/AuthProjectService';

export class AuthProjectServiceExpressApi extends AuthProjectService {
  public async register(username: string, password: string) {
    const response = await axios.post('http://localhost:3001/register', {
      username,
      password,
    });

    return response.data;
  }

  public async login(username: string, password: string) {
    const response = await axios.post('http://localhost:3001/login', {
      username,
      password,
    });

    return response.data;
  }
}
