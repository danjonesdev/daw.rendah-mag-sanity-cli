export default {
  name: "category",
  title: "Category",
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
    }
  ]
};
