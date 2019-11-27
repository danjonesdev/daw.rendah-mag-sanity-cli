export default {
  name: "sample",
  title: "Sample",
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
      title: "File",
      name: "file",
      type: "file",
      required: true
      // fields: [
      //   {
      //     name: "title",
      //     type: "string",
      //     title: "Description"
      //   },
      //   {
      //     name: 'author',
      //     type: 'reference',
      //     title: 'Author',
      //     to: {type: 'person'}
      //   }
      // ]
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "category" },
      required: true
    },
    {
      name: "pack",
      title: "Pack",
      type: "reference",
      to: { type: "pack" },
      required: true
    },
    // {
    //   name: "pack",
    //   title: "Packs",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "pack" } }]
    // },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    }
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage"
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      });
    }
  }
};
