import { prisma } from "@repo/db"

export const CreateCompany = async (companyName: string, slug: string, companyWebsite: string): Promise<string> => {
  const trimmedSlug = slug.trim()
  const trimmedName = companyName.trim()
  const trimmedWebsite = companyWebsite.trim()

  if (!trimmedSlug) {
    throw new Error('Slug is required to get or create a company.')
  }

  if (!trimmedName) {
    throw new Error('Company name is required to get or create a company.')
  }

  const company = await prisma.company.upsert({
    where: { slug: trimmedSlug },
    update: { displayName: trimmedName, websiteUrl:trimmedWebsite },
    create: { slug: trimmedSlug, displayName: trimmedName, websiteUrl:trimmedWebsite },
    select: { id: true },
  })

  return company.id
}
