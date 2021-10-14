export default abstract class AuthProjectService {
  public abstract register(username: string, password: string): Promise<any>;
  public abstract login(username: string, password: string): Promise<any>;
  public abstract checkIfLoggedIn(): Promise<any>;
  public abstract logout(): Promise<any>;
}