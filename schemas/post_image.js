export default {
  name: 'post_image',
  type: 'document',
	title: 'Post Image',
  fields: [
    {
      name: 'post_id',
      type: 'string',
      title: 'Post Id'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
        metadata: [
          'exif',
          'location',
        ]
      }
    }
  ]
}