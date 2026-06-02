import { sanityFetch } from './client'

// Home page content
export async function getHomePage() {
  return sanityFetch<Record<string, unknown>>(
    `*[_type == "homePage" && _id == "homePage"][0]`
  )
}

// Portfolio projects
export async function getPortfolioProjects() {
  return sanityFetch<unknown[]>(
    `*[_type == "portfolioProject"] | order(order asc) { _id, titleAr, titleEn, categoryAr, categoryEn, year, client, "image": image.asset->url }`
  )
}

// Clients
export async function getClients() {
  return sanityFetch<unknown[]>(
    `*[_type == "client"] | order(order asc) { _id, name, website, "logo": logo.asset->url }`
  )
}

// Testimonials
export async function getTestimonials() {
  return sanityFetch<unknown[]>(
    `*[_type == "testimonial"] | order(order asc) { _id, nameAr, nameEn, roleAr, roleEn, companyAr, companyEn, textAr, textEn, rating }`
  )
}

// Services
export async function getServices() {
  return sanityFetch<unknown[]>(
    `*[_type == "service"] | order(order asc) { _id, titleAr, titleEn, descAr, descEn, icon, pageSlug }`
  )
}

// FAQs
export async function getFaqs() {
  return sanityFetch<unknown[]>(
    `*[_type == "faq"] | order(order asc) { _id, questionAr, questionEn, answerAr, answerEn }`
  )
}

// Site settings
export async function getSiteSettings() {
  return sanityFetch<Record<string, unknown>>(
    `*[_type == "siteSettings" && _id == "siteSettings"][0]`
  )
}
