import slugify from 'slugify'

export default function slugifyText(text: string): string {
  return slugify(text, { lower: true, strict: true })
}
