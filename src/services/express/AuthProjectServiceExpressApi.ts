import axios from 'axios';
import AuthProjectService from '../abstract/AuthProjectService';

export class AuthProjectServiceExpressApi extends AuthProjectService {
  public async register(username: string, password: string) {
    const response = await axios.post('/authProject/register', {
      username,
      password,
    });

    return response.data;
  }

  public async login(username: string, password: string) {
    const response = await axios.post('/authProject/login', {
      username,
      password,
    });

    return response.data;
  }

  public async checkIfLoggedIn() {
    return await axios.get('/authProject/login');
  }

  public async logout() {
    return await axios.post('/authProject/logout', {}, { withCredentials: true })
  }
}
