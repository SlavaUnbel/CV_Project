export default abstract class PortfolioService {
  public abstract getPortfolioList(): Promise<IPortfolio[]>;
}