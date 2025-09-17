import { CollectionConfig } from 'payload'

export const ClientSaying: CollectionConfig = {
  slug: 'client-saying',
  labels: {
    singular: 'Client Saying',
    plural: 'Client Sayings',
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
      name: 'PositionAr',
      type: 'text',
      label: 'Position (Arabic)',
      required: true,
    },
    {
      name: 'PositionEn',
      type: 'text',
      label: 'Position (English)',
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
      label: 'Client Image',
    },
    {
      name: 'stars',
      type: 'number',
      label: 'Stars',
      required: true,
      min: 0,
      max: 5,
      defaultValue: 5,
    },
  ],
}
