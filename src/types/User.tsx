export interface LocalUser {
    avatar: string,
    name: string,
    login: string,
    bio: string,
    repos: number,
    following: number,
    followers: number,
    location: string,
    website: string,
    twitter: string,
    company: string,
    created: string
}

export type GithubUser = {
    login: string,
    id: number,
    avatar_url: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    twitter_username: string,
    public_repos: number,
    followers: number,
    following: number,
    created_at: string,
  }
export type GithubError = {
    message: string,
    documentation: string
}