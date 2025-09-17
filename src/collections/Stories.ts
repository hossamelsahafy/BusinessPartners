import { CollectionConfig } from 'payload'

export const Stories: CollectionConfig = {
  slug: 'stories',
  labels: {
    singular: 'Stories',
    plural: 'Stories',
  },
  admin: {
    useAsTitle: 'NameEn',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'NameAr',
      type: 'text',
      label: 'Name (Arabic)',
      required: true,
    },
    {
      name: 'NameEn',
      type: 'text',
      label: 'Name (English)',
      required: true,
    },
    {
      name: 'DesAr',
      type: 'textarea',
      label: 'Description (Arabic)',
      required: true,
    },
    {
      name: 'DesEn',
      type: 'textarea',
      label: 'Description (English)',
      required: true,
    },
    {
      name: 'Image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
  ],
}
