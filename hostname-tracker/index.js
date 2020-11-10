class Tracker {
  constructor() {
    this.hosts = {}
  }

  allocate(name) {
    if (typeof this.hosts[name] === 'undefined') {
      this.hosts[name] = [true]

      return `${name}1`
    }

    for (let i = 0; i < this.hosts[name].length; i++) {
      if (this.hosts[name][i]) {
        if (i === this.hosts[name].length - 1) {
          this.hosts[name].push(true)

          return `${name}${this.hosts[name].length}`
        }
      }

      if (!this.hosts[name][i]) {
        this.hosts[name][i] = true

        return `${name}${i + 1}`
      }
    }
  }

  deallocate(name) {
    const hostId = name.slice(-1)
    const hostName = name.substr(0, name.length - 1)

    this.hosts[hostName][hostId - 1] = false
  }
}

function hostnameAllocater(a) {
  const tracker = new Tracker()
  let result = []

  a.forEach((host) => {
    let [action, hostName] = host.split(' ')

    if (action === 'A') {
      const hostId = tracker.allocate(hostName)

      result.push(hostId)
    } else {
      tracker.deallocate(hostName)
    }
  })

  return result
}

exports.hostnameAllocater = hostnameAllocater
