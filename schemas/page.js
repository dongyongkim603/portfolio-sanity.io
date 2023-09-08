export default {
  name: 'page',
  type: 'document',
	title: 'Page',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'url',
      type: 'url',
      title: 'Url'
    },
    {
      name: 'headline',
      type: 'string',
      title: 'Headline'
    },
    {
      name: 'banner',
      title: 'Banner',
      type: 'image',
      options: {
        hotspot: 'true'
      }
    },
    {
      name: 'components',
      title: 'Components',
      type: 'array',
      of: [
        { 
          type: 'object',
          name: 'selling_point',
          fields: [
            {type: 'string', name: 'button'},
            {type: 'url', name: 'button_link'},
            {type: 'string', name: 'headline'},
            {type: 'text', name: 'content'},
            {type: 'image', name: 'main_image'}
          ]
        }
      ]
    }
  ]
}