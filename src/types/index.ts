export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags: string[];
  date: string;
}

export interface Thought {
  id: string;
  title: string;
  content: string;
  date: string;
  category?: string;
  tags?: string[];
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  platform: 'youtube' | 'vimeo' | 'other';
  date: string;
}

export interface Hobby {
  id: string;
  title: string;
  description: string;
  image?: string;
  category: string;
}

export interface LifeSection {
  id: string;
  title: string;
  description: string;
  path: string;
}

