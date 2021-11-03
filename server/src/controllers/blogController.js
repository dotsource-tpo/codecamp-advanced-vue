class BlogController {
  constructor (_client) {
    this.client = _client
    this.collection = this.client.db('codecamp').collection('articles')
  }

  async getAll() {
    try {
      await this.client.connect()

      const result = await this.collection.find({}).toArray()

      await this.client.close()

      return result
    } catch (err) {
      console.error(err)
    }
  }

  async insertOne(data) {
    try {
      await this.client.connect()

      const result = await this.collection.insertOne(data)
      console.log(`Inserted new document with id ${result.insertedId}`)

      await this.client.close()

      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }
}

module.exports = BlogController