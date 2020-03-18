import * as core from '@actions/core'
import getJoke from './getJokes'

async function run(): Promise<void> {
  try {
    const joke: string = await getJoke()
    // eslint-disable-next-line no-console
    console.log(joke)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
