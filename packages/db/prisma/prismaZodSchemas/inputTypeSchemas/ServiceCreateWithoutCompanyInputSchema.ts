import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainCreateNestedManyWithoutServiceInputSchema } from './ServiceDomainCreateNestedManyWithoutServiceInputSchema';

export const ServiceCreateWithoutCompanyInputSchema: z.ZodType<Prisma.ServiceCreateWithoutCompanyInput> = z.strictObject({
  id: z.cuid().optional(),
  slug: z.string(),
  name: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ServiceDomain: z.lazy(() => ServiceDomainCreateNestedManyWithoutServiceInputSchema).optional(),
});

export default ServiceCreateWithoutCompanyInputSchema;
