const { hostnameAllocater } = require('./index')

describe('hostnameAllocater', () => {
  it('should return correct hostnames 1', () => {
    const hosts = ['A apibox', 'A apibox', 'D apibox1', 'A apibox', 'A sitebox']

    expect(hostnameAllocater(hosts)).toEqual(['apibox1', 'apibox2', 'apibox1', 'sitebox1'])
  })

  it('should return correct hostnames 2', () => {
    const hosts = [
      'A apibox',
      'A apibox',
      'D apibox1',
      'A apibox',
      'A sitebox',
      'D sitebox1',
      'A sitebox',
      'D sitebox1',
      'A sitebox',
    ]

    expect(hostnameAllocater(hosts)).toEqual(['apibox1', 'apibox2', 'apibox1', 'sitebox1', 'sitebox1', 'sitebox1'])
  })

  it('should return correct hostnames 3', () => {
    const hosts = [
      'A apibox',
      'A apibox',
      'D apibox1',
      'A apibox',
      'A sitebox',
      'D sitebox1',
      'A sitebox',
      'D sitebox1',
      'A sitebox',
      'A demobox',
      'A demobox',
      'A demobox',
    ]

    expect(hostnameAllocater(hosts)).toEqual([
      'apibox1',
      'apibox2',
      'apibox1',
      'sitebox1',
      'sitebox1',
      'sitebox1',
      'demobox1',
      'demobox2',
      'demobox3',
    ])
  })

  it('should return correct hostnames 4', () => {
    const hosts = ['A apibox', 'A apibox', 'D apibox2', 'A apibox', 'A apibox', 'A apibox', 'D apibox2', 'A apibox']

    expect(hostnameAllocater(hosts)).toEqual(['apibox1', 'apibox2', 'apibox2', 'apibox3', 'apibox4', 'apibox2'])
  })
})
