export default abstract class PomodoroTimerService {
  public abstract getMusicList(): Promise<string[]>
}