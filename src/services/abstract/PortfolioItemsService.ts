export default abstract class PortfolioItemsService {
  public abstract getExpandingCardsData(): Promise<IExpandingCards[]>
}