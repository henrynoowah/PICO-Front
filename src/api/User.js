import API from "./API";

export const getPhotographerUser = async userIdx => {
  const data = await API.get(`pUser/${userIdx}`)
  .then(res => {
    return res.data
  })
  .catch(err => {
    return ({
      userIdx: 6,
      email: 'lgh95m@gmail.com',
      name: '이기환',
      phone: '010-4446-0410',
      isPhotographer: true
    })
  })
  return data
}

export const getPUserWithPIdx = async photographerIdx => {
  const data = await API.get(`pUserIdx/${photographerIdx}`)
  .then(res => {
    return getPhotographerUser(res.data)
  })
  .catch(err => {
    return getPhotographerUser(2)
    // return 1 //pUserIdx
  })
  return data
}

export const getPhotographerDetail = async userIdx => {
  const data = await API.get(`photographer/${userIdx}`)
  .then(res => {
    return res.data
  })
  return data
}