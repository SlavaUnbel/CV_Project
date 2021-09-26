export default abstract class WorksService {
  public abstract getWorksData(): Promise<IWorks[]>
}