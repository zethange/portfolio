export interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: "User";
  site_admin: boolean;
  name: string | null; // Optional property (can be string or null)
  company: string | null; // Optional property (can be string or null)
  blog: string;
  location: string | null; // Optional property (can be string or null)
  email: string | null; // Optional property (can be string or null)
  hireable: boolean;
  bio: string;
  twitter_username: string | null; // Optional property (can be string or null)
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}
