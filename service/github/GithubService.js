import { Octokit } from "@octokit/rest"

export class GithubService {
  _oktokit
  constructor(token) {
    this._oktokit = new Octokit({
      auth: token
    })
  }

  async createIssue({ owner, repo, title }) {
    const result = await this._oktokit.rest.issues.create({
      owner,
      repo,
      title
    })
    return result
  }
}
