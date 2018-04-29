
const fetch = require('node-fetch')

export async function getUserInfo(userName) {
  const res = await fetch(`https://api.github.com/users/${userName}`);
  const data = res.json();
  return data;
}

export async function getUserReposInfo (userName) {
  const res = await fetch(`https://api.github.com/users/${userName}/repos`);
  const data = res.json();
  return data;
}

export async function getUserAvatar(userName) {
  const userInfo = await getUserInfo(userName);
  return userInfo.avatar_url;
}

export async function calculateScore (userName) {
  const userInfo = await getUserInfo(userName);
  const reposList = await getUserReposInfo(userName);
  const numOfFollowers = userInfo.followers;
  const numOfStars = reposList.reduce((sum, item) => sum + item.stargazers_count, 0);
  return numOfFollowers + numOfStars * 3;
}

export async function getUserAvatar(userName) {
  const avatar = await fetch(`https://github.com/${userName}.png?size=200`);
  return avatar;
}