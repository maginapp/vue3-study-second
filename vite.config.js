import path from 'path'

export default {
  port: 3333,
  alias: {
    '/@/': path.resolve(__dirname, './src')
  }
}