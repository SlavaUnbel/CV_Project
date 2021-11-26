export default abstract class TodoAppService {
  public abstract getTodos(): Promise<any>;
  public abstract addTodo(todo: string): Promise<any>;
  public abstract completeTodo(todo: ITodoApp): Promise<any>;
  public abstract removeTodo(id: string): Promise<any>;
}
