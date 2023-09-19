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
      type: 'number',
      title: 'User Id'
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
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
          type: 'post_image',
          name: 'user_image',
        }
      ]
    }
  ]
}