import axios from 'axios';

const KEY = 'AIzaSyDfmPhQRLkowvti9roNUl2gBmcUK2s4oKg';

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
