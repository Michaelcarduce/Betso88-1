const blogs = [
  {
    id: 1,
    title: "First Blog Title Sample - For Testing and Building Purposes ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat",
    slug: "blog-title-slug1",
    buttonText: "Read More ➤",
    link: "/blogs/blog-title-slug1",
    image: "/img/sample.webp",
    Author: "Betso88 Writer",
    Date: "January 4, 2024",
    content: `
      <p class="text-paragraph"><a class="text-anchor" href="https://example.com" target="_blank"><span class="target">Lorem ipsum dolor</span></a>  sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div class="text-bonusButtonContainer"></div>
      <div class="target"><h2 class="text-heading2">Heading2 Heading2 Heading2</h2></div>
      <p class="text-paragraph">Sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <picture class="blog-pic">
        <source media="(min-width: 768px)" srcSet="/img/sample.webp" />
        <img src="/img/sample.webp" alt={blog.title} class="blog-img" />
      </picture>
      <ul class="px-4">
        <li>
          <div class="target"><h3 class="text-heading3">Heading3 Heading3 Heading3</h3></div>
          <p class="text-paragraph"><span class="target">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <ul class="px-4">
            <li>
              <div class="target"><h4 class="text-heading4">Heading4 Heading4 Heading4</h4></div>
              <p class="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </li>
            <li>
              <div class="target"><h4 class="text-heading4">Heading4 Heading4 Heading4</h4></div>
              <p class="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </li>
          </ul>
        </li>
        <li>
          <div class="target"><h3 class="text-heading3">Heading3 Heading3 Heading3</h3></div>
          <p class="text-paragraph"><span class="target">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <ul class="px-4">
            <li>
              <div class="target"><h4 class="text-heading4">Heading4 Heading4 Heading4</h4></div>
              <p class="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </li>
          </ul>
        </li>
      </ul>
      <div class="text-bonusButtonContainer"></div>
      <div class="target"><h2 class="text-heading2">Heading2 Heading2 Heading2</h2></div>
      <p class="text-paragraph">Sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <picture class="blog-pic">
        <source media="(min-width: 768px)" srcSet="/img/sample.webp" />
        <img src="/img/sample.webp" alt={blog.title} class="blog-img" />
      </picture>
      <ul class="px-4">
        <li>
          <div class="target"><h3 class="text-heading3">Heading3 Heading3 Heading3</h3></div>
          <p class="text-paragraph"><span class="target">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <ul class="px-4">
            <li>
              <div class="target"><h4 class="text-heading4">Heading4 Heading4 Heading4</h4></div>
              <p class="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </li>
          </ul>
        </li>
      </ul>
    `,
  },
  {
    id: 2,
    title: "Second Blog Title Sample - For Testing and Building Purposes ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat",
    slug: "blog-title-slug2",
    buttonText: "Read More ➤",
    link: "/blogs/blog-title-slug2",
    image: "/img/sample.webp",
    Author: "Betso88 Writer",
    Date: "January 4, 2024",
    content: `
      <p class="text-paragraph"><a class="text-anchor" href="https://example.com" target="_blank"><span class="target">Lorem ipsum dolor</span></a>  sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div class="text-bonusButtonContainer"></div>
      <div class="target"><h2 class="text-heading2">Heading2 Heading2 Heading2</h2></div>
      <p class="text-paragraph">Sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <picture class="blog-pic">
        <source media="(min-width: 768px)" srcSet="/img/sample.webp" />
        <img src="/img/sample.webp" alt={blog.title} class="blog-img" />
      </picture>
      <ul class="px-4">
        <li>
          <div class="target"><h3 class="text-heading3">Heading3 Heading3 Heading3</h3></div>
          <p class="text-paragraph"><span class="target">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <ul class="px-4">
            <li>
              <div class="target"><h4 class="text-heading4">Heading4 Heading4 Heading4</h4></div>
              <p class="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </li>
            <li>
              <div class="target"><h4 class="text-heading4">Heading4 Heading4 Heading4</h4></div>
              <p class="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </li>
          </ul>
        </li>
        <li>
          <div class="target"><h3 class="text-heading3">Heading3 Heading3 Heading3</h3></div>
          <p class="text-paragraph"><span class="target">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <ul class="px-4">
            <li>
              <div class="target"><h4 class="text-heading4">Heading4 Heading4 Heading4</h4></div>
              <p class="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </li>
          </ul>
        </li>
      </ul>
      <div class="text-bonusButtonContainer"></div>
      <div class="target"><h2 class="text-heading2">Heading2 Heading2 Heading2</h2></div>
      <p class="text-paragraph">Sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <picture class="blog-pic">
        <source media="(min-width: 768px)" srcSet="/img/sample.webp" />
        <img src="/img/sample.webp" alt={blog.title} class="blog-img" />
      </picture>
      <ul class="px-4">
        <li>
          <div class="target"><h3 class="text-heading3">Heading3 Heading3 Heading3</h3></div>
          <p class="text-paragraph"><span class="target">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <ul class="px-4">
            <li>
              <div class="target"><h4 class="text-heading4">Heading4 Heading4 Heading4 testing</h4></div>
              <p class="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </li>
          </ul>
        </li>
      </ul>
    `,
  },
  {
    id: 3,
    title: "Third Blog Title Sample - For Testing and Building Purposes ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat",
    slug: "blog-title-slug3",
    buttonText: "Read More ➤",
    link: "/blogs/blog-title-slug3",
    image: "/img/sample2.webp",
    Author: "Betso88 Writer",
    Date: "January 4, 2024",
    content: `
      <p class="text-paragraph"><a class="text-anchor" href="https://example.com" target="_blank"><span class="target">Lorem ipsum dolor</span></a>  sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div class="text-bonusButtonContainer"></div>
      <div class="target"><h2 class="text-heading2">Heading2 Heading2 Heading2</h2></div>
      <p class="text-paragraph">Sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <picture class="blog-pic">
        <source media="(min-width: 768px)" srcSet="/img/sample.webp" />
        <img src="/img/sample.webp" alt={blog.title} class="blog-img" />
      </picture>
      <ul class="px-4">
        <li>
          <div class="target"><h3 class="text-heading3">Heading3 Heading3 Heading3</h3></div>
          <p class="text-paragraph"><span class="target">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <ul class="px-4">
            <li>
              <div class="target"><h4 class="text-heading4">Heading4 Heading4 Heading4</h4></div>
              <p class="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </li>
            <li>
              <div class="target"><h4 class="text-heading4">Heading4 Heading4 Heading4</h4></div>
              <p class="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </li>
          </ul>
        </li>
        <li>
          <div class="target"><h3 class="text-heading3">Heading3 Heading3 Heading3</h3></div>
          <p class="text-paragraph"><span class="target">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <ul class="px-4">
            <li>
              <div class="target"><h4 class="text-heading4">Heading4 Heading4 Heading4</h4></div>
              <p class="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </li>
          </ul>
        </li>
      </ul>
      <div class="text-bonusButtonContainer"></div>
      <div class="target"><h2 class="text-heading2">Heading2 Heading2 Heading2</h2></div>
      <p class="text-paragraph">Sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <picture class="blog-pic">
        <source media="(min-width: 768px)" srcSet="/img/sample.webp" />
        <img src="/img/sample.webp" alt={blog.title} class="blog-img" />
      </picture>
      <ul class="px-4">
        <li>
          <div class="target"><h3 class="text-heading3">Heading3 Heading3 Heading3</h3></div>
          <p class="text-paragraph"><span class="target">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <ul class="px-4">
            <li>
              <div class="target"><h4 class="text-heading4">Heading4 Heading4 Heading4 testing</h4></div>
              <p class="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </li>
          </ul>
        </li>
      </ul>
    `,
  },
  {
    id: 4,
    title: "Fourth Blog Title Sample - For Testing and Building Purposes ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat",
    slug: "blog-title-slug4",
    buttonText: "Read More ➤",
    link: "/blogs/blog-title-slug4",
    image: "/img/sample2.webp",
    Author: "Betso88 Writer",
    Date: "January 4, 2024",
    content: `
      <p class="text-paragraph"><a class="text-anchor" href="https://example.com" target="_blank"><span class="target">Lorem ipsum dolor</span></a>  sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div class="text-bonusButtonContainer"></div>
      <div class="target"><h2 class="text-heading2">Heading2 Heading2 Heading2</h2></div>
      <p class="text-paragraph">Sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <picture class="blog-pic">
        <source media="(min-width: 768px)" srcSet="/img/sample.webp" />
        <img src="/img/sample.webp" alt={blog.title} class="blog-img" />
      </picture>
      <ul class="px-4">
        <li>
          <div class="target"><h3 class="text-heading3">Heading3 Heading3 Heading3</h3></div>
          <p class="text-paragraph"><span class="target">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <ul class="px-4">
            <li>
              <div class="target"><h4 class="text-heading4">Heading4 Heading4 Heading4</h4></div>
              <p class="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </li>
            <li>
              <div class="target"><h4 class="text-heading4">Heading4 Heading4 Heading4</h4></div>
              <p class="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </li>
          </ul>
        </li>
        <li>
          <div class="target"><h3 class="text-heading3">Heading3 Heading3 Heading3</h3></div>
          <p class="text-paragraph"><span class="target">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <ul class="px-4">
            <li>
              <div class="target"><h4 class="text-heading4">Heading4 Heading4 Heading4</h4></div>
              <p class="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </li>
          </ul>
        </li>
      </ul>
      <div class="text-bonusButtonContainer"></div>
      <div class="target"><h2 class="text-heading2">Heading2 Heading2 Heading2</h2></div>
      <p class="text-paragraph">Sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <picture class="blog-pic">
        <source media="(min-width: 768px)" srcSet="/img/sample.webp" />
        <img src="/img/sample.webp" alt={blog.title} class="blog-img" />
      </picture>
      <ul class="px-4">
        <li>
          <div class="target"><h3 class="text-heading3">Heading3 Heading3 Heading3</h3></div>
          <p class="text-paragraph"><span class="target">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <ul class="px-4">
            <li>
              <div class="target"><h4 class="text-heading4">Heading4 Heading4 Heading4 testing</h4></div>
              <p class="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 1  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </li>
          </ul>
        </li>
      </ul>
    `,
  },
];

// Sort the blogs by ID (newest to oldest)
const sortedBlogs = blogs.sort((a, b) => b.id - a.id);

export default sortedBlogs;
