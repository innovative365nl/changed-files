import {GetFoldersCommand} from './'

describe('get-folders command', () => {
  it('should only return folders', () => {
    const files = [
      {
        filename: 'one/bla/test.txt'
      },
      {
        filename: 'two.txt'
      },
      {
        filename: 'two/bla/something.ts'
      }
    ]
    expect(new GetFoldersCommand().run(files)).toEqual([
      {
        filename: 'bla'
      },
      {
        filename: 'bla'
      }
    ])
  })
})
