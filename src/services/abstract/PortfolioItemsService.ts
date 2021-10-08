export default abstract class PortfolioItemsService {
  public abstract getExpandingCardsData(): Promise<IExpandingCards[]>

  public abstract getProgressStepsData(): Promise<number[]>

  public abstract getRotatingNavigationData(): Promise<IRotatingNavigation>

  public abstract getSplitLandingPageData(): Promise<ISplitLandingPage[]>

  public abstract getDadJokesDataFromApi(): Promise<IDadJokes>
}