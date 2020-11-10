# Allocating hostname with the correct id

### Given a tracker that can allocate hostname with the latest ID

### A is add D is delete

<code>
const hosts = [
  'A apibox',
  'A apibox',
  'D apibox1',
  'A apibox',
  'A sitebox'
]
</code>
<br/><br/>

<code>
const result = [
  'apibox1',
  'apibox2',
  'apibox1',
  'sitebox1',
]
</code>
