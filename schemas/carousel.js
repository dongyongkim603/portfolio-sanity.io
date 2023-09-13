export default {
  name: 'carousel',
  type: 'document',
	title: 'Carousel',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'headline',
      type: 'string',
      title: 'Headline'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        { 
          name: 'carousel_image',
          type: 'image',
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
  ]
}