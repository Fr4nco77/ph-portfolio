export interface NavTexts {
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
}

export interface MainFeatured {
  title: string;
  button: string;
}
