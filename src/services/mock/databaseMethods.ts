import {
  firstIconSrc,
  firstWorkSrc,
  portfolioItems,
  rotatingNavigationSrc, secondIconSrc,
  secondWorkSrc,
  splitLandingPageSrc,
  thirdIconSrc,
  thirdWorkSrc
} from '../../utils/constants';

export const getMenuOptions = (): string[] => {
  const options = ['Home', 'Portfolio', 'Works', 'Contact'];

  return new Array(options.length).fill(1).map((_, index) => options[index]);
};

export const getMenuIconSpans = (): number[] =>
  new Array(3).fill(1).map((_, index) => index + 1);

export const generatePortfolioData = (
  amount: number,
  id: number
): IPortfolio[] =>
  new Array(portfolioItems.length).fill(1).map((_, index) => {
    if (index) id++;
    const paths = portfolioItems.map((item) =>
      item.replaceAll(' ', '-').toLowerCase()
    );

    return {
      id,
      imgSrc: paths.map(
        (preview) => `${process.env.PUBLIC_URL}/images/${preview}.png`
      )[index],
      videoSrc: paths.map(
        (video) => `${process.env.PUBLIC_URL}/videos/${video}.mp4`
      )[index],
      title: portfolioItems[index],
      link: paths[index],
    };
  });

export const generateWorksData = (amount: number, id: number): IWorks[] => {
  const icons = [firstIconSrc, secondIconSrc, thirdIconSrc];
  const titles = ['Web Design', 'Mobile Oak Alley', 'Branding'];
  const images = [firstWorkSrc, secondWorkSrc, thirdWorkSrc];

  return new Array(amount).fill(1).map((_, index) => {
    if (index) id++;

    return {
      id,
      iconSrc: icons[id - 1],
      title: titles[id - 1],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ratione, possimus. Lorem ipsum dolor sit amet, elit. Ratione, possimus.',
      imgSrc: images[id - 1],
    };
  });
};

export const getInitialMessagesForContactInputFields = (): IMessages => {
  const names = ['Name', 'Email', 'Subject'];

  return {
    nameMessage: {
      message: `Please, fill in the "${names[0]}" field`,
      type: 'error',
    },
    emailMessage: {
      message: `Please, fill in the "${names[1]}" field`,
      type: 'error',
    },
    subjectMessage: {
      message: `Please, fill in the "${names[2]}" field`,
      type: 'error',
    },
  };
};

export const generateExpandingCardsData = (
  amount: number,
  id: number
): IExpandingCards[] => {
  const titles = ['Viñales', 'Oak Alley', 'Austria', 'Big Sur', 'Deutschland'];

  return new Array(amount).fill(1).map((_, index) => {
    if (index) id++;

    return {
      id,
      title: titles[id - 1],
    };
  });
};

export const generateRotatingNavigationData = (): IRotatingNavigation => {
  return {
    title: '10 Fun Facts About Corgis',
    author: 'By Rebecca O\'Connell',
    date: '11 November, 2018',
    introText: 'You already know they’re cute, compact, and smart. But there’s a lot more to these beloved little dogs that you might not know.',
    images: new Array(7).fill(1).map((_, idx) => `${rotatingNavigationSrc}/dog-${idx + 1}.jpg`),
    articleTitles: ['1. There are two distinct breeds of corgis.', '2. The cardigan welsh corgi is the older breed.', '3. Pembroke welsh corgis have a considerable history as well.', '4. The Kennel Club originally lumped the two breeds together.', '5. Corgis were originally used as herders.', '6. According to welsh legend, fairies ride them.', '7. The Royal Family loves the pembroke welsh corgi.', '8. Corgis were used to predict princess Charlotte\'s name.', '9. Corgi means "Dwarf Dog" in Welsh.', '10. Southern California hosts an enormous corgi meetup.'],
    articleParagraphs: ['There are two types of Welsh corgis: the Pembroke Welsh corgi and the Cardigan Welsh corgi. They are considered two entirely different breeds because they come from different ancestors. Their remarkable resemblance is a result of crossbreeding in the 19th century.', 'If you’re trying to tell the two breeds apart, the most notable difference is that the Pembroke does not have a tail. On top of a tail, Cardigan Welsh corgis also have rounded ears, while Pembrokes generally have pointy ears.', 'A warrior tribe of Celts brought the corgis in their aboriginal form to Cardiganshire, Wales around 1200 BCE, which means corgis have been in Wales for over 3000 years. This early breed was a member of the Teckel family of dogs that went on to include the dachshund.', 'Although no one knows for sure, most agree that the Pembroke Welsh corgi dates back to 1107 CE when Flemish weavers migrated to Wales. The Spitz-type dog bred with the original Cardigan corgis to produce the Pembroke Welsh corgis we know today.', 'The two types of corgis were registered as one in 1925, leading to a lot of stress among breeders. Often a judge would favor one breed over the other, which would lead to controversies at dog shows. After nearly a decade of (pretty adorable) strife, the breeds gained separate recognition in 1934.', 'The Welsh used the short dogs as herders as early as the 10th century. In those days, pastures were considered common land, so there were no fences. In order to keep a farmer’s cattle together and separated from other herds, corgis would nip at their legs to herd them. Because of their closeness to the ground, corgis had easy access to the cows’ ankles and were difficult targets of the retaliatory kicks of cattle.', 'Some say that the corgi is an “enchanted dog” favored by fairies and elves. At night the magical creatures would use the dogs to pull their carriages and be their steeds in battle. According to legend, the markings on a corgi’s coat suggest the faint outline of a saddle and harness.', 'Queen Elizabeth II has had more than 30 corgis in her lifetime. Though her last two corgis—Whisper and Willow—have both recently passed away, she does still have two dorgis (corgi/dachshund mixes) named Candy and Vulcan.', 'The Queen met her first corgi when King George VI brought a male pooch home from a kennel in 1933. Named Dookie, the dog was an immediate hit with the future queen and her sister, Princess Margaret.', 'After a second corgi named Jane entered the picture, the canine couple had a litter of puppies, two of which were kept. The Queen received another dog named Susan for her 18th birthday—from there, the collection of corgis really gained momentum. Some of the royal corgis bred with Princess Margaret’s dachshund Pipkin to create dorgis.', 'In the spring of 2015, when Prince William and Kate Middleton were awaiting the birth of their second child, people are already taking bets on the name. Gambling company Ladbrokes used corgis in an attempt to predict what the name would be. The company’s ad featured 10 corgis wearing vests with different names in a race to predict what the name of the child would be. The corgi sporting the name Alexandra won the race. Princess Charlotte was born on May 2, 2015.', 'According to the Oxford English Dictionary, cor means dwarf and gi means dog.', 'SoCal Corgi Beach Day started as a humble meet-up event at Huntington Beach in 2012. The first event attracted just 15 dogs; the last one had more than 1100 corgis in attendance. The event happens three times a year.']
  }
}

export const getSplitLandingPageData = (): ISplitLandingPage[] => [
  {
    title: 'Playstation 5',
    link: 'https://playstation.com/en-us/ps5',
    side: 'left',
    background: `${splitLandingPageSrc}/ps5.jpg`
  },
  {
    title: 'XBox Series X',
    link: 'https://xbox.com/en-US/consoles/xbox-series-x',
    side: 'right',
    background: `${splitLandingPageSrc}/xbox.jpg`
  },
]