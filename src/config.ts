import type { MarkdownInstance } from 'astro'

export interface Frontmatter {
  draft?: boolean
  title: string
  description?: string
  author?: string
  publishDate: string
  coverSVG?: string
  coverImage?: string
  socialImage?: string
  categories?: string[]
  tags?: string[]
  file?: string
  url?: string
  minutesRead?: string
  extra?: string[]
  section?: string[]
}

export interface TagType {
  tag: string
  count: number
  pages: MarkdownInstance<Frontmatter>[]
}

export const SiteMetadata = {
  title: 'Astro Blog Template',
  description: 'An Astro starter for corporate/marketing/blog websites.',
  author: {
    name: 'Author Name',
    twitter: '@AnyName',
    url: 'https://yoursite.net',
    email: 'example@email.net',
    summary: 'your example summary',
  },
  org: {
    name: 'Your Name',
    twitter: '@example',
    url: 'https://yoursite.com',
    email: 'example@email.com',
    summary:
      'Your example summary',
  },
  location: 'Rivendell, Middle Earth',
  latlng: [-33.86785, 151.20732] as [number, number],
  repository: 'https://github.com/arthastheking113/astro-blog-template',
  social: [
    {
      name: 'Email',
      link: 'mailto:example@email.com',
      icon: 'envelope',
    },
    {
      name: 'Phone',
      link: 'tel:555-5555',
      icon: 'telephone',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com',
      icon: 'linkedin',
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com',
      icon: 'facebook',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com',
      icon: 'instagram',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com',
      icon: 'twitter',
    },
    {
      name: 'Github',
      link: 'https://github.com/arthastheking113/astro-blog-template',
      icon: 'github',
    },
  ],
  buildTime: new Date().toString(),
}

export const Logo = '../svg/astro/full-logo-light.svg'
export const LogoImage = '../images/astro/full-logo-light.png'
export const FeaturedSVG = '../svg/undraw/undraw_design_inspiration.svg'
export const DefaultSVG = '../svg/undraw/undraw_my_feed.svg'
export const DefaultImage = '../images/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
  { name: 'Blog', href: 'blog' },
  { name: 'Docs', href: 'doc/introduction' },
]

export const CategoryDetail = [
  {
    category: 'instructions',
    coverSVG: '../svg/undraw/undraw_instruction_manual.svg',
    socialImage: '../images/undraw/undraw_instruction_manual.png',
    description: 'Guidelines on using this starter.'
  },
  {
    category: 'information',
    coverSVG: '../svg/undraw/undraw_instant_information.svg',
    socialImage: '../images/undraw/undraw_instant_information.png',
    description: 'Information articles.'
  },
]

export function categoryDetail(category: string | undefined) {
  const details = CategoryDetail.filter(cat => cat.category == category)

  if (details.length == 1) {
    return details[0]
  }
  return {
    category: 'General',
    coverSVG: '../svg/undraw/undraw_instant_information.svg',
    socialImage: '../images/undraw/undraw_instant_information.png',
    description: 'Category ' + category,
  }
}
//change following information depend on your use
export const AuthorDetail = [
  {
    name: 'Your Name',
    description: 'Astro Blog Template',
    contact: 'example@email.com',
    image: '../images/authors/default.png'
  }
]

export const DefaultAuthor = {
  name: 'Astro Blog Template',
  image: '../images/authors/default.png',
  contact: 'example@email.com',
  description: 'Astro Blog Template',
}

export function authorDetail(author: string | undefined) {
  const details = AuthorDetail.filter(person => person.name == author)

  if (details.length == 1) {
    return details[0]
  }
  return DefaultAuthor
}

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/arthastheking113/astro-blog-template`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>