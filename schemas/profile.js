export default {
  name: 'profile',
  type: 'document',
	title: 'Profile',
  fields: [
    {
      name: 'username',
      type: 'string',
      title: 'Username'
    },
    {
      name: 'uid',
      type: 'string',
      title: 'User Id'
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: 'true',
        metadata: [
          'exif',
          'location',
        ]
      }
    },
    {
      name: 'usersImages',
      title: 'User Images',
      type: 'array',
      of: [
        { 
          name: 'carousel_image',
          type: 'image',
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
  ]
}