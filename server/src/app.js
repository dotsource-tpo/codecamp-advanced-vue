const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/articles', (req, res) => {
  res.json([
    {
      id: 0,
      title: 'Hello World!',
      date: '2021/11/01',
      author: 'admin',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet sagittis id consectetur purus ut faucibus. Et leo duis ut diam quam nulla porttitor. Interdum velit laoreet id donec ultrices tincidunt arcu. Velit scelerisque in dictum non. Sed turpis tincidunt id aliquet risus feugiat in ante. Ultricies mi eget mauris pharetra et. Ornare lectus sit amet est placerat in egestas erat. Et molestie ac feugiat sed lectus vestibulum. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est.'
    },
    {
      id: 1,
      title: 'Lorem ipsum',
      date: '2021/11/02',
      author: 'admin',
      content: 'Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Magna ac placerat vestibulum lectus mauris ultrices eros. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Cras ornare arcu dui vivamus. Tempor id eu nisl nunc mi ipsum. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Luctus accumsan tortor posuere ac ut consequat semper. Nec nam aliquam sem et tortor consequat id porta nibh. Sit amet mattis vulputate enim. Laoreet non curabitur gravida arcu ac. Tellus orci ac auctor augue mauris augue neque gravida in. Eu feugiat pretium nibh ipsum. Diam vel quam elementum pulvinar etiam non. Id nibh tortor id aliquet lectus. Cursus metus aliquam eleifend mi in. Egestas erat imperdiet sed euismod nisi porta lorem mollis.'
    }
  ])
})

app.listen(3000)