export interface Project {
  title: string;
  tag: string;
  description: string[];
  imageUrl: string;
  backgroundColor: string;
  tagBackgroundColor: string;
  tagTextColor: string;
  textColor: string;
  launchDateLabel?: string;
  launchDate?: string;
  link?: string;
}

export interface Skill {
  name: string;
  color: string;
}
