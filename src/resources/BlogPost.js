export default {
  post(id) {
    return {
      path: `/object/${id}`,
      resolve: (response, mappers) => {
        let { title, content, created_at, metadata } = response.object
        let meta = {
          description: metadata.description,
          published: created_at,
          author: metadata.author.title,
          images: metadata.images.images
        }
        return mappers.merge({ title, content, ...meta })
      }
    }
  }
}
