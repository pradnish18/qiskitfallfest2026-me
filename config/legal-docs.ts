/**
 * Centralized configuration for legal and accessibility document paths.
 * When PDFs are provided in /public/documents/, update these URLs to open directly.
 */
export const LEGAL_DOCUMENTS = {
  privacy: {
    title: 'Privacy Policy',
    // Once uploaded to /public/documents/privacy-policy.pdf, update this path:
    pdfPath: '/documents/privacy-policy.pdf',
    fallbackRoute: '/privacy',
  },
  terms: {
    title: 'Terms of Service',
    pdfPath: '/documents/terms-of-service.pdf',
    fallbackRoute: '/terms',
  },
  accessibility: {
    title: 'Accessibility Statement',
    pdfPath: '/documents/accessibility.pdf',
    fallbackRoute: '/accessibility',
  },
} as const;
