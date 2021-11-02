class BlogController {
  constructor (_client) {
    this.client = _client
  }

  async getAll() {
    try {
      await this.client.connect()

      const collection = this.client.db('codecamp').collection('blog')
      const result = await collection.find({}).toArray()

      console.log(result)

      await this.client.close()

      return result
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = BlogController