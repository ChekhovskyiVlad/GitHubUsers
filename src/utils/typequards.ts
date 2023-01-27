import { GithubUser} from "../types/User"

export const isGithubUser = (user: any): user is GithubUser => 'id' in user;