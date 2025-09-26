import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainCreateNestedManyWithoutServiceInputSchema } from './ServiceDomainCreateNestedManyWithoutServiceInputSchema';

export const ServiceCreateWithoutCompanyInputSchema: z.ZodType<Prisma.ServiceCreateWithoutCompanyInput> = z.object({
  id: z.string().cuid().optional(),
  slug: z.string(),
  name: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ServiceDomain: z.lazy(() => ServiceDomainCreateNestedManyWithoutServiceInputSchema).optional()
}).strict() as z.ZodType<Prisma.ServiceCreateWithoutCompanyInput>;

export default ServiceCreateWithoutCompanyInputSchema;
