import { GithubUser, LocalUser } from "../types/User";

export const extractLocalUser = (user:GithubUser): LocalUser => ({
    login: user.login,
    avatar: user.avatar_url,
    name: user.name,
    bio: user.bio,
    website: user.blog,
    company: user.company,
    created: user.created_at,
    followers: user.followers,
    following: user.following,
    location: user.location,
    repos: user.public_repos,
    twitter: user.twitter_username
})