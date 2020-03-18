import request from 'request-promise'

const jokesCall = {
  method: 'GET',
  uri: 'https://icanhazdadjoke.com/',
  headers: {
    Accept: 'application/json',
    'User-Agent':
      'Writing JavaScript action GitHub Learning Lab course.  Visit lab.github.com or to contact us.'
  },
  json: true
}

async function getJoke(): Promise<string> {
  const res = await request(jokesCall)
  return res.joke
}

export default getJoke
