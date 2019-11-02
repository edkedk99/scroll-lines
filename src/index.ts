import { stdout } from 'process'
import logUpdate from 'log-update'

/** Print multiple automatic horizontal scroll text to terminal
 * /** module:myModule.hScroll
 * @param {string} textArr - Each item is a line that will scroll repeatedly
 * @param {number} [speed=100] - The speed in ms for the animation
 * @returns {void}
 * @example hscroll(['a large text'], ['another large text'])
 */
export default function hScroll(textArr: string[], speed = 100): void {
  const emptyArr: string[] = Array(stdout.columns).fill(' ')
  let textData = textArr.map(text => {
    const content = ' => ' + text
    return {
      content,
      position: 0,
      arr: emptyArr,
      lastChar: content.length - 1
    }
  })

  setInterval(() => {
    textData = textData.map(item => {
      let arr = item.arr.slice(1, item.arr.length)
      arr = [...arr, item.content[item.position]]
      const position = item.position === item.lastChar ? 0 : item.position + 1
      return { ...item, arr, position }
    })

    const textOutput = textData
      .map(item => item.arr.join(''))
      .reduce((prev, curr) => {
        return prev + '\n' + curr
      }, '')

    logUpdate(textOutput)
  }, speed)
}
