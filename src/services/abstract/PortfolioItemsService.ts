export default abstract class PortfolioItemsService {
  public abstract getExpandingCardsData(): Promise<IExpandingCards[]>

  public abstract getProgressStepsData(): Promise<number[]>

  public abstract getRotatingNavigationData(): Promise<IRotatingNavigation>

  public abstract getSplitLandingPageData(): Promise<ISplitLandingPage[]>

  public abstract getDadJokesDataFromApi(): Promise<IDadJokes>

  public abstract getFaqCollapseData(): Promise<IFaqCollapse[]>

  public abstract getAnimatedNavigationData(): Promise<string[]>

  public abstract getMovieAppDataFromApi(url: string): Promise<any>

  public abstract getGithubProfilesUserDataFromApi(username: string): Promise<any>
  public abstract getGithubProfilesReposDataFromApi(username: string): Promise<any>
}