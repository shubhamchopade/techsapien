# Gatsby Blog powered with MDX

This is a powerful markdown-based authoring format that allows you to seamlessly write JSX (React components) in your markdown files.

## Features

- Gatsby: This project is built on Gatsby, a modern and powerful static site generator that uses React and GraphQL.
- MDX: MDX (Markdown + JSX) enables you to write interactive and dynamic content by embedding React components directly in your markdown files.
- Syntax Highlighting: Code blocks in your markdown files are automatically highlighted using your preferred syntax highlighting theme.
- Theme Support: Easily customize the look and feel of your blog by applying themes or creating your own styles.
- Responsive Design: The blog is designed to be mobile-friendly and responsive across different devices and screen sizes.
- SEO Optimized: Built-in support for SEO optimization ensures your blog posts are easily discoverable by search engines.
- Custom Markdown templates for Posts, Tutorials and Resources
- Social Sharing: Enable social sharing buttons to allow readers to easily share your blog posts on various social media platforms.
- Google Analytics: Track and analyze your blog's traffic and user behavior with Google Analytics integration.

## Getting Started

To get started with this Gatsby blog powered with MDX, follow these steps:

1. **Clone the repository:** Start by cloning this repository to your local machine using the following command:
   ```
   git clone <repository-url>
   ```
2. **Install dependencies:** Navigate to the project directory and install the required dependencies using npm or yarn:
   ```
   cd gatsby-blog-mdx
   npm install
   ```
   or
   ```
   cd gatsby-blog-mdx
   yarn install
   ```
3. **Configure the blog:** Open the `gatsby-config.js` file and update the necessary configuration options such as site metadata, plugins, and theme settings.
4. **Create blog posts:** Create your blog posts by adding markdown files (with the `.mdx` extension) in the `content/posts` directory. You can utilize MDX syntax to include React components and create interactive content.
5. **Customize the theme:** If you want to customize the blog's theme, you can modify the styles and components in the `src/theme` directory.
6. **Start the development server:** Once everything is set up, start the development server to see your blog in action locally:
   ```
   npm run develop
   ```
   or
   ```
   yarn develop
   ```
   The development server will be accessible at `http://localhost:8000`.

## Deployment

To deploy your Gatsby blog powered with MDX, follow these steps:

1. **Build the production-ready site:** Generate a production-ready build of your blog using the following command:
   ```
   npm run build
   ```
   or
   ```
   yarn build
   ```
   This will create a `public` directory containing optimized static assets for your blog.
2. **Deploy the site:** Choose a hosting provider of your choice (such as Netlify, Vercel, or GitHub Pages) and follow their deployment instructions to deploy your blog.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request on the GitHub repository.

## License

This project is licensed under the BSD Zero Clause License. Feel free to use and modify it according to your needs. See the `LICENSE` file for more information.
