// 深拷贝
const deepCopy = obj => JSON.parse(JSON.stringify(obj))

// sleep
const sleep = (ms) => new Promise((resolve)=> setTimeout(resolve, ms))

// 获取url参数
const getParamByUrl = (key) => {
  const url = new URL(location.href)
  return url.searchParams.get(key)
}

// 检测暗色主题
const isDarkMode = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

// 复制文本
const copyToClipboard = (text) => navigator.clipboard && navigator.clipboard.writeText && navigator.clipboard.writeText(text)

// 数组重排
const shuffle = (arr) => arr.sort(() => Math.random() - 0.5)

// 颜色随机
const generateRandomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`

