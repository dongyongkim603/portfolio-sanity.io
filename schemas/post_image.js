export default {
  name: 'selling_point',
  type: 'document',
	title: 'Selling Point',
  fields: [
    {
      name: 'post_id',
      type: 'string',
      title: 'Post Id'
    },
    {
      name: 'post_image',
      type: 'image',
      title: 'Post Image',
      options: {
        hotspot: 'true',
        metadata: [
          'exif',
          'location',
        ]
      }
    }
  ]
}