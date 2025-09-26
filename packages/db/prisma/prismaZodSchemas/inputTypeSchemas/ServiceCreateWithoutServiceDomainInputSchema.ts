import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyCreateNestedOneWithoutServiceInputSchema } from './CompanyCreateNestedOneWithoutServiceInputSchema';

export const ServiceCreateWithoutServiceDomainInputSchema: z.ZodType<Prisma.ServiceCreateWithoutServiceDomainInput> = z.object({
  id: z.string().cuid().optional(),
  slug: z.string(),
  name: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutServiceInputSchema)
}).strict() as z.ZodType<Prisma.ServiceCreateWithoutServiceDomainInput>;

export default ServiceCreateWithoutServiceDomainInputSchema;
