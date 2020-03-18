import * as core from '@actions/core'
import getJoke from './getJokes'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    const joke: string = await getJoke()
    const repoToken = core.getInput('githubToken')
    const oktokit = new github.GitHub(repoToken)
    await oktokit.issues.create({
      repo: github.context.repo.repo,
      owner: github.context.repo.owner,
      title: 'Here is a brilliant DAD JOKE for you! Specially!',
      body: joke
    })
    // eslint-disable-next-line no-console
    console.log(joke)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
