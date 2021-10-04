export default abstract class PortfolioItemsService {
  public abstract getExpandingCardsData(): Promise<IExpandingCards[]>
  public abstract getProgressStepsData(): Promise<number[]>
}