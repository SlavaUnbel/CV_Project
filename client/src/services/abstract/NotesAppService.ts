export default abstract class NotesAppService {
  public abstract getNotes(): Promise<any>;
  public abstract addNote(): Promise<any>;
  public abstract editNote(note: INotesApp): Promise<any>;
  public abstract removeNote(note: INotesApp): Promise<any>;
}
