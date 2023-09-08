export default {
  name: 'selling_point',
  type: 'document',
	title: 'Selling Point',
  fields: [
    {
      name: 'button',
      type: 'string',
      title: 'Button'
    },
    {
      name: 'button_link',
      type: 'url',
      title: 'Button Link'
    },
    {
      name: 'headline',
      type: 'string',
      title: 'Headline'
    },
    {
      name: 'content',
      type: 'text',
      title: 'Content'
    },
    {
      name: 'main_image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: 'true'
      }
    }
  ]
}