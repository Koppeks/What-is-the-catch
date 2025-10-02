import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyCreateNestedOneWithoutServiceInputSchema } from './CompanyCreateNestedOneWithoutServiceInputSchema';

export const ServiceCreateWithoutServiceDomainInputSchema: z.ZodType<Prisma.ServiceCreateWithoutServiceDomainInput> = z.strictObject({
  id: z.cuid().optional(),
  slug: z.string(),
  name: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutServiceInputSchema),
});

export default ServiceCreateWithoutServiceDomainInputSchema;
