export interface NavTexts {
  home: string;
  about: string;
  catalog: string;
  blog: string;
  contact: string;
}

export interface CTATexts {
  title: string;
  subtitle: string;
  button: string;
}

export interface MainHero {
  h1: string;
  title1: string;
  title2: string;
  title3: string;
  subtitle: string;
  tags: string;
}

export interface MainRecent {
  title: string;
  button: string;
}

export interface MainAbout {
  title: string;
  text1: string;
  text2: string;
  stats: {
    data: string;
    label: string;
  }[];
  button: string;
  button2: string;
}

export interface MainFeatured {
  title: string;
  button: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  button: string;
}

export interface Contacts {
  title: string;
  email: string;
  phone: string;
  schedule: string;
  ubication: string;
  socialIcons: string;
  download: string;
}

export interface Blog {
  title: string;
  description: string;
  header: {
    title: string;
    subtitle: string;
  };
  featuredProjects: {
    more: string;
  };
  category: {
    all: string;
  };
}

export interface Urls {
  current: string;
  next?: string;
  prev?: string;
  first?: string;
  last?: string;
}
