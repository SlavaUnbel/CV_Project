export default abstract class TodoAppService {
  public abstract getTodos(): Promise<any>;
  public abstract addTodo(todo: string): Promise<any>;
  public abstract completeTodo(completed: boolean, id: number): Promise<any>;
  public abstract removeTodo(id: number): Promise<any>;
}