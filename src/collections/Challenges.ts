import { CollectionConfig } from 'payload'

export const Challenges: CollectionConfig = {
  slug: 'challenges',
  labels: {
    singular: 'Challenge',
    plural: 'Challenges',
  },
  admin: {
    useAsTitle: 'ChallengesEn',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Challenges',
      type: 'richText',
      label: 'Challenges (Arabic)',
      required: true,
    },
    {
      name: 'ChallengesEn',
      type: 'richText',
      label: 'Challenges (English)',
      required: true,
    },
    {
      name: 'Chances',
      type: 'richText',
      label: 'Opportunities (Arabic)',
      required: true,
    },
    {
      name: 'ChancesEn',
      type: 'richText',
      label: 'Opportunities (English)',
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
