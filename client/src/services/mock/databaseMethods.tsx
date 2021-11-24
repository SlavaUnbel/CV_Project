import { Facebook, LinkedIn, Mail, Phone, Twitter, YouTube } from '@mui/icons-material';

import {
  email,
  firstIconSrc,
  firstWorkSrc,
  linkedIn,
  phoneNumber,
  pomodoroMusicSrc,
  rotatingNavigationSrc,
  secondIconSrc,
  secondWorkSrc,
  splitLandingPageSrc,
  testimonialsSwitcherSrc,
  thirdIconSrc,
  thirdWorkSrc,
} from '../../utils/constants';
import { authProjectPath, contactPath, liveChatPath, pomodoroTimerPath } from '../../utils/route';

export const getMenuOptions = (): string[] => {
  const options = ["Home", "Portfolio", "Works", "Contact"];

  return Array.from({ length: options.length }, (_, idx) => idx).map(
    (option) => options[option]
  );
};

export const getMenuIconSpans = (): number[] =>
  Array.from({ length: 3 }, (_, idx) => idx + 1).map((span) => span);

export const getHeaderCreds = (): IHeader => {
  return {
    phone: {
      icon: <Phone className="icon" />,
      title: phoneNumber,
      href: `tel:${phoneNumber}`,
      target: "_blank",
    },
    email: {
      icon: <Mail className="icon" />,
      title: email,
      href: contactPath,
    },
    linkedin: {
      icon: <LinkedIn className="icon" />,
      title: "Slava Levkovich",
      href: linkedIn,
      target: "_blank",
    },
  };
};

export const generatePortfolioData = (id: number): IPortfolio[] => {
  const portfolioItems: IPortfolioItem[] = [
    { title: "Expanding Cards", criteria: "UI" },
    { title: "Rotating Navigation", criteria: "UI" },
    { title: "Scroll Animation", criteria: "UI" },
    { title: "Split Landing Page", criteria: "UI" },
    { title: "Form Wave Animation", criteria: "UI" },
    { title: "Dad Jokes", criteria: "sideAPI" },
    { title: "FAQ Collapse", criteria: "UI" },
    { title: "Random Choice Picker", criteria: "UI" },
    { title: "Animated Navigation", criteria: "UI" },
    { title: "Incrementing Counter", criteria: "UI" },
    { title: "Movie App", criteria: "sideAPI" },
    { title: "Drink Water", criteria: "UI" },
    { title: "Theme Clock", criteria: "UI" },
    { title: "GitHub Profiles", criteria: "sideAPI" },
    { title: "Password Generator", criteria: "featured" },
    { title: "Auth Project", criteria: "featured" },
    { title: "Notes App", criteria: "featured" },
    { title: "Hoverboard", criteria: "UI" },
    { title: "Live Chat", criteria: "featured" },
    { title: "Testimonials Switcher", criteria: "UI" },
    { title: "Todo App", criteria: "featured" },
    { title: "Pomodoro Timer", criteria: "featured" },
  ];

  return Array.from({ length: portfolioItems.length }, (_, idx) => idx).map(
    (index) => {
      if (index) id++;
      const paths = portfolioItems.map((item) =>
        item.title.replaceAll(" ", "-").toLowerCase()
      );

      return {
        id,
        imgSrc: paths.map(
          (preview) => `${process.env.PUBLIC_URL}/images/${preview}.png`
        )[index],
        videoSrc: paths.map(
          (video) => `${process.env.PUBLIC_URL}/videos/${video}.mp4`
        )[index],
        title: portfolioItems[index].title,
        link: paths[index],
        criteria: portfolioItems[index].criteria,
      };
    }
  );
};

export const generateWorksData = (amount: number, id: number): IWorks[] => {
  const icons = [firstIconSrc, secondIconSrc, thirdIconSrc];
  const titles = ["Auth Project", "Live Chat", "Pomodoro Timer"];
  const images = [firstWorkSrc, secondWorkSrc, thirdWorkSrc];
  const descriptions = [
    "This project represents an immitation of real-world application with usage of session through managing cookies and storaging the JWT into localStorage for authentication check purpose.",
    "This one shows how web sockets can be used to maintain the process of chatting in realtime. The interface includes emoji picker so that the project looks more user-friendly.",
    "The project can be used for time management. There is a custom audio player implemented in order to make your working process more comfortable.",
  ];
  const links = [authProjectPath, liveChatPath, pomodoroTimerPath];

  return Array.from({ length: amount }, (_, idx) => idx).map((index) => {
    if (index) id++;

    return {
      id,
      iconSrc: icons[id - 1],
      title: titles[id - 1],
      description: descriptions[id - 1],
      imgSrc: images[id - 1],
      link: links[id - 1],
    };
  });
};

export const getInitialMessagesForContactInputFields = (): IMessages => {
  const names = ["Name", "Email", "Subject"];

  return {
    nameMessage: {
      message: `Please, fill in the "${names[0]}" field`,
      type: "error",
    },
    emailMessage: {
      message: `Please, fill in the "${names[1]}" field`,
      type: "error",
    },
    subjectMessage: {
      message: `Please, fill in the "${names[2]}" field`,
      type: "error",
    },
  };
};

export const generateExpandingCardsData = (
  amount: number,
  id: number
): IExpandingCards[] => {
  const titles = ["Viñales", "Oak Alley", "Austria", "Big Sur", "Deutschland"];

  return Array.from({ length: amount }, (_, idx) => idx).map((index) => {
    if (index) id++;

    return {
      id,
      title: titles[id - 1],
    };
  });
};

export const generateRotatingNavigationData = (): IRotatingNavigation => {
  return {
    title: "10 Fun Facts About Corgis",
    author: "By Rebecca O'Connell",
    date: "11 November, 2018",
    introText:
      "You already know they’re cute, compact, and smart. But there’s a lot more to these beloved little dogs that you might not know.",
    images: Array.from({ length: 7 }, (_, idx) => idx).map(
      (_, idx) => `${rotatingNavigationSrc}/dog-${idx + 1}.jpg`
    ),
    articleTitles: [
      "1. There are two distinct breeds of corgis.",
      "2. The cardigan welsh corgi is the older breed.",
      "3. Pembroke welsh corgis have a considerable history as well.",
      "4. The Kennel Club originally lumped the two breeds together.",
      "5. Corgis were originally used as herders.",
      "6. According to welsh legend, fairies ride them.",
      "7. The Royal Family loves the pembroke welsh corgi.",
      "8. Corgis were used to predict princess Charlotte's name.",
      '9. Corgi means "Dwarf Dog" in Welsh.',
      "10. Southern California hosts an enormous corgi meetup.",
    ],
    articleParagraphs: [
      "There are two types of Welsh corgis: the Pembroke Welsh corgi and the Cardigan Welsh corgi. They are considered two entirely different breeds because they come from different ancestors. Their remarkable resemblance is a result of crossbreeding in the 19th century.",
      "If you’re trying to tell the two breeds apart, the most notable difference is that the Pembroke does not have a tail. On top of a tail, Cardigan Welsh corgis also have rounded ears, while Pembrokes generally have pointy ears.",
      "A warrior tribe of Celts brought the corgis in their aboriginal form to Cardiganshire, Wales around 1200 BCE, which means corgis have been in Wales for over 3000 years. This early breed was a member of the Teckel family of dogs that went on to include the dachshund.",
      "Although no one knows for sure, most agree that the Pembroke Welsh corgi dates back to 1107 CE when Flemish weavers migrated to Wales. The Spitz-type dog bred with the original Cardigan corgis to produce the Pembroke Welsh corgis we know today.",
      "The two types of corgis were registered as one in 1925, leading to a lot of stress among breeders. Often a judge would favor one breed over the other, which would lead to controversies at dog shows. After nearly a decade of (pretty adorable) strife, the breeds gained separate recognition in 1934.",
      "The Welsh used the short dogs as herders as early as the 10th century. In those days, pastures were considered common land, so there were no fences. In order to keep a farmer’s cattle together and separated from other herds, corgis would nip at their legs to herd them. Because of their closeness to the ground, corgis had easy access to the cows’ ankles and were difficult targets of the retaliatory kicks of cattle.",
      "Some say that the corgi is an “enchanted dog” favored by fairies and elves. At night the magical creatures would use the dogs to pull their carriages and be their steeds in battle. According to legend, the markings on a corgi’s coat suggest the faint outline of a saddle and harness.",
      "Queen Elizabeth II has had more than 30 corgis in her lifetime. Though her last two corgis—Whisper and Willow—have both recently passed away, she does still have two dorgis (corgi/dachshund mixes) named Candy and Vulcan.",
      "The Queen met her first corgi when King George VI brought a male pooch home from a kennel in 1933. Named Dookie, the dog was an immediate hit with the future queen and her sister, Princess Margaret.",
      "After a second corgi named Jane entered the picture, the canine couple had a litter of puppies, two of which were kept. The Queen received another dog named Susan for her 18th birthday—from there, the collection of corgis really gained momentum. Some of the royal corgis bred with Princess Margaret’s dachshund Pipkin to create dorgis.",
      "In the spring of 2015, when Prince William and Kate Middleton were awaiting the birth of their second child, people are already taking bets on the name. Gambling company Ladbrokes used corgis in an attempt to predict what the name would be. The company’s ad featured 10 corgis wearing vests with different names in a race to predict what the name of the child would be. The corgi sporting the name Alexandra won the race. Princess Charlotte was born on May 2, 2015.",
      "According to the Oxford English Dictionary, cor means dwarf and gi means dog.",
      "SoCal Corgi Beach Day started as a humble meet-up event at Huntington Beach in 2012. The first event attracted just 15 dogs; the last one had more than 1100 corgis in attendance. The event happens three times a year.",
    ],
  };
};

export const getSplitLandingPageData = (): ISplitLandingPage[] => [
  {
    title: "Playstation 5",
    link: "https://playstation.com/en-us/ps5",
    side: "left",
    background: `${splitLandingPageSrc}/ps5.jpg`,
  },
  {
    title: "XBox Series X",
    link: "https://xbox.com/en-US/consoles/xbox-series-x",
    side: "right",
    background: `${splitLandingPageSrc}/xbox.jpg`,
  },
];

export const generateFaqCollapseData = (id: number): IFaqCollapse[] => {
  const faqs = {
    titles: [
      "Is Time Travel Really Possible?",
      "How Much Money Is There In The World?",
      "Can You Fire A Gun In Space?",
      "What If Everyone On Earth Jumped At Once?",
      "Which Came First – The Egg or The Chicken?",
      "Where Is The Center Of The Universe?",
      "Does Sunlight Weigh Anything?",
      "What Is The Resolution Of The Human Eye?",
      "How Much Of Our Brain Do We Use?",
      "What’s the Color of Mirror?",
    ],
    answers: [
      "Technically, we are already traveling in time at the rate of 1 hour per hour. The actual question is, can we travel faster or slower than this rate. Einstein’s Special relativity theory says that when your traveling speed relative to other objects is close to the speed of light, time goes slower for you than for the people you left behind. That’s the reason the clock of GPS satellites disagrees with the clock on Earth by seven millionth of a second daily.",
      "75 trillion US dollars. Fun Fact: The largest amount of CASH ever burnt on Earth is one million pounds by K Foundation on 23 August 1994.",
      "Guns don’t require oxygen to work, so the vacuum of outer space will not be a problem. The gunpowder is completely self-contained and doesn’t depend on the atmosphere. The gun will work better in space. The bullet will not have to compress or push the air in the barrel, and it can travel infinite distances in space.",
      "There are more than 7 billion humans on Earth. That means total human weight could be approximately 7*80 billion kg. However, the total mass of the Earth is 5.9*1024 kg, which is comparatively way too high. According to Sir Newton, there is always an equal and opposite reaction to every action. So technically, there will be a tiny impact.",
      "The egg-laying animals existed way far before the chicken came. So technically, the egg came before the chicken.",
      "Let’s take the Universe as a balloon that is being inflated with air. Imagine yourself as one of the many dots on a spherical balloon. The other dots will be getting away from you as the balloon gets bigger. In fact, every dot is getting farther from each other at the same rate. No matter what dot you represent, it looks as you are at the center of the expanding balloon. The same happens in 3-dimensional space.",
      "The sunlight emitted in a day would be around 3.7*1024 kg.  If you collect all the sunlight in a perfect mirror box, the mass of the box will increase by that amount (because of the photon energy). Furthermore, freely streaming mass-less protons are deflected by gravitational fields.",
      "The Digital images are made of millions of tiny tiles-like elements. The more these tiny elements (called pixels), the more will be the resolution. A single megapixel is equivalent to one million pixels in an image. In good light, you can distinguish two lines if they are separated by at least 0.6 arc minutes, equivalent pixel size is 0.3 arc minutes. Now, if you take a 120-degree horizontal field and 60-degree vertical plane as your total plane of view. Then the resolution of your eye would be: 120 * 120 * 60 * 60 / (0.3 * 0.3) = 576 Megapixels",
      "It has been misattributed to many people (including Albert Einstein) that we only use 10% of our brains. This myth was originated in the 1890s by the father of American psychology, William James. He said, “most of us do not meet our mental potential” and this misunderstanding stuck for a long time. The human brain requires 20% (more than any other organ) of the body’s energy; in children, that figure is 50%, and in infants, it is 60%. It contains more neurons (around 86 billion) than any other species, and this dense neuron packing is what makes us so smart.",
      "Humans can differentiate 10 million different colors, but it’s hard to imagine the mirror is not white or silver. It is actually the color of whatever is reflected onto it. The perfect mirror reflects all images in the exact opposite direction (angle of reflection) and distance. So the color of the mirror would be kind of smart white.",
    ],
    count: 10,
  };

  return Array.from({ length: faqs.count }, (_, idx) => idx).map((index) => {
    if (index) id++;

    return {
      id,
      title: faqs.titles[id - 1],
      answer: faqs.answers[id - 1],
    };
  });
};

export const getInitialMessagesForFormWaveAnimationInputFields =
  (): IAuthProjectMessages => {
    const names = ["Username", "Password"];

    return {
      emailMessage: {
        message: `Please, fill in the "${names[0]}" field`,
        type: "error",
      },
      passwordMessage: {
        message: `Please, fill in the "${names[1]}" field`,
        type: "error",
      },
    };
  };

export const getIncrementingCounterItemsInfo = (): IIncrementingCounter => {
  return {
    twitter: {
      icon: <Twitter className="icon" />,
      dataTarget: 12000,
      title: "Twitter Followers",
    },
    youtube: {
      icon: <YouTube className="icon" />,
      dataTarget: 5000,
      title: "YouTube Subscribers",
    },
    facebook: {
      icon: <Facebook className="icon" />,
      dataTarget: 7500,
      title: "Facebook Fans",
    },
  };
};

export const generateTestimonialsSwitcherData = (
  amount: number,
  id: number
): ITestimonialsSwitcher[] => {
  const testimonials = [
    "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. He is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a thoroughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
    "This guy is an amazing frontend developer that delivered the task exactly how we need it, do yourself a favour and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
    "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definetely repeat with him.",
    "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
    "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
    "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!",
    "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
  ];
  const usernames = [
    "Miyah Myles",
    "June Cha",
    "Inda Niskanen",
    "Renee Sims",
    "Jonathan Nunfiez",
    "Sasha Ho",
    "Veeti Seppanen",
  ];
  const roles = [
    "Marketing",
    "Software Engineer",
    "Data Entry",
    "Receptionist",
    "Graphic Designer",
    "Accountant",
    "Art Director",
  ];

  return Array.from({ length: amount }, (_, idx) => idx).map((index) => {
    if (index) id++;

    return {
      id,
      testimonial: testimonials[id - 1],
      avatar: `${testimonialsSwitcherSrc}/${usernames[id - 1]
        .split(" ")
        .join("-")
        .toLowerCase()}.jpg`,
      username: usernames[id - 1],
      role: roles[id - 1],
    };
  });
};

export const getPomodoroTimerMusic = (): string[] => [
  ...Array.from(
    { length: 4 },
    (_, idx) => `${pomodoroMusicSrc}/${idx + 1}.mp3`
  ),
];
