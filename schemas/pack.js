export default {
  name: "pack",
  title: "Pack",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      required: true
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      required: true,
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: []
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "title",
      media: "image"
    }
  }
};
