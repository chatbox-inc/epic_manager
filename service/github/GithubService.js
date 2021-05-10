import { Octokit } from "@octokit/rest"

export class GithubService {
  _oktokit
  constructor(token) {
    this._oktokit = new Octokit({
      auth: token
    })
  }

  async createIssue({ owner, repo, title, body }) {
    const result = await this._oktokit.rest.issues.create({
      owner,
      repo,
      title,
      body
    })
    return result
  }

  async getProjectsInRepository({owner, repo}) {
    const result = await this._oktokit.rest.projects.listForRepo({
      owner,
      repo
    })
    const projects_info = result.map(x => {
      return {
        project_id: x.id,
        name: x.name
    }})
    return projects_info
  }

  async getProjectColumns({project_id}) {
    const result = await this._octokit.rest.projects.listColumns({
      project_id
    });
    const columns_info = result.map(x => {
      return {
        column_id: x.id,
        name: x.name
      }})
    return columns_info
  }

  async addIssuesToProject({column_id, note, issues}) {//issues...[{id int, type string}]
    // TODO issuesのオブジェクトを宣言して、instanceofでバリデーションするかの確認
    for(const {id, type} of issues) {
      // TODO エラー判定いるかの確認
      await this._octokit.rest.projects.createCard({
        column_id,
        note,
        id,
        type,
      });
    }
  }
}
