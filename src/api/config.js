import axios from 'axios';

export const baseUrl = 'http://localhost:3281';

//axios 的实例及拦截器配置
const axiosInstance = axios.create({
  baseURL: baseUrl
});

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, "网络错误");
  }
);

export {
  axiosInstance
};

// 歌手种类
export const categoryTypes = [{
  value: "华语男",
  key: "1001"
},
{
  value: "华语女",
  key: "1002"
},
{
  value: "华语组合",
  key: "1003"
},
{
  value: "欧美男",
  key: "2001"
},
{
  value: "欧美女",
  key: "2002"
},
{
  value: "欧美组合",
  key: "2003"
},
{
  value: "日本男",
  key: "6001"
},
{
  value: "日本女",
  key: "6002"
},
{
  value: "日本组合",
  key: "6003"
},
{
  value: "韩国男",
  key: "7001"
},
{
  value: "韩国女",
  key: "7002"
},
{
  value: "韩国组合",
  key: "7003"
},
{
  value: "其他男歌手",
  key: "4001"
},
{
  value: "其他女歌手",
  key: "4002"
},
{
  value: "其他组合",
  key: "4003"
},
];

// 歌手首字母
export const alphaTypes = [{
  key: "A",
  value: "A"
},
{
  key: "B",
  value: "B"
},
{
  key: "C",
  value: "C"
},
{
  key: "D",
  value: "D"
},
{
  key: "E",
  value: "E"
},
{
  key: "F",
  value: "F"
},
{
  key: "G",
  value: "G"
},
{
  key: "H",
  value: "H"
},
{
  key: "I",
  value: "I"
},
{
  key: "J",
  value: "J"
},
{
  key: "K",
  value: "K"
},
{
  key: "L",
  value: "L"
},
{
  key: "M",
  value: "M"
},
{
  key: "N",
  value: "N"
},
{
  key: "O",
  value: "O"
},
{
  key: "P",
  value: "P"
},
{
  key: "Q",
  value: "Q"
},
{
  key: "R",
  value: "R"
},
{
  key: "S",
  value: "S"
},
{
  key: "T",
  value: "T"
},
{
  key: "U",
  value: "U"
},
{
  key: "V",
  value: "V"
},
{
  key: "W",
  value: "W"
},
{
  key: "X",
  value: "X"
},
{
  key: "Y",
  value: "Y"
},
{
  key: "Z",
  value: "Z"
}
];

//排行榜编号
export const RankTypes = {
  "0": "云音乐新歌榜",
  "1": "云音乐热歌榜",
  "2": "网易原创歌曲榜",
  "3": "云音乐飙升榜",
  "4": "云音乐国电榜",
  "5": "UK排行榜周榜",
  "6": "美国Billboard周榜",
  "7": "KTV唛榜",
  "8": "iTunes榜",
  "9": "Hit FM Top榜",
  "10": "日本Oricon周榜",
  "11": "韩国Melon排行榜周榜",
  "12": "韩国Mnet排行榜周榜",
  "13": "韩国Melon原声周榜",
  "14": "中国TOP排行榜（港台榜）",
  "15": "中国TOP排行榜（内地榜）",
  "16": "香港电台中文歌曲龙虎榜",
  "17": "华语金曲榜",
  "18": "中国嘻哈榜",
  "19": "法国 NRJ Vos Hits 周榜",
  "20": "台湾Hito排行榜",
  "21": "Beatport全球电子舞曲榜",
  "22": "云音乐ACG音乐榜",
  "23": "江小白YOLO云音乐说唱榜"
};