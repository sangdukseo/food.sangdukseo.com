import _map from 'lodash.map'

export default {
  feed() {
    return {
      path: '/object-type/posts',
      resolve: (response, mappers) => {
        let _posts = _map(response.objects, function(i) {
          let temp = {
            title: i.title,
            image: `https://drive.google.com/uc?export=view&id=${i.metadata.drivekey.key}`,
            published: i.created_at,
            author: i.metadata.author.title,
            id: i.slug
          };
          return temp;
        })
        return mappers.pipe(_posts)
      }
    }
  }
}
