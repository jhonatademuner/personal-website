export interface Project {
  id: number;
  imgUrl: string;
  title: string;
  subtitle: string;
  description: string;
  skillsUsed: string[];
  repoUrl?: string;
  liveUrl?: string;
  downloadUrl?: string;
  order: number;
}
