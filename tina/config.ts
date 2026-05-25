import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "src/content/posts",
        format: "md",
        ui: {
          dateFormat: "MMMM DD YYYY",
          defaultItem: {
            draft: false,
            author: "the-orlando-guide",
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "meta_title",
            label: "SEO Title (max 60 chars)",
          },
          {
            type: "string",
            name: "description",
            label: "Meta Description (max 155 chars)",
            ui: { component: "textarea" },
          },
          {
            type: "datetime",
            name: "date",
            label: "Publish Date",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image",
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            list: true,
            options: [
              { value: "theme-parks", label: "Theme Parks" },
              { value: "travel-planning", label: "Travel Planning" },
              { value: "hotels-transportation", label: "Hotels & Transportation" },
              { value: "orlando-local-life", label: "Orlando Local Life" },
            ],
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            options: [{ value: "the-orlando-guide", label: "The Orlando Guide" }],
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft (unpublished)",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
          },
        ],
      },
    ],
  },
});
