import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Z96 The Mix",
  EMAIL: "contact@thackerbroadcasting.com",
  CALL_SIGN: "KCZH",
  EXTERNAL_LINK: "https://live.thackerbroadcasting.com/public/z96_mix",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Our Homepage",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "About us",
};

export const BLOG: Metadata = {
  TITLE: "Posts",
  DESCRIPTION: "Our posts",
};

export const SCHEDULE: Metadata = {
  TITLE: "Schedule",
  DESCRIPTION: "Our schedule",
};

export const REQUESTS: Metadata = {
  TITLE: "Requests",
  DESCRIPTION: "Request songs",
};

export const HISTORY: Metadata = {
  TITLE: "History",
  DESCRIPTION: "Playout history",
}

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/thackerbroadcasting/z96mix"
  },
  { 
    NAME: "instagram",
    HREF: "https://www.instagram.com/z96themix",
  }
];