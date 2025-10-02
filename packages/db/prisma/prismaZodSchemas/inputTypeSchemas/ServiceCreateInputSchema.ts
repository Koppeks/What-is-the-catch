import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyCreateNestedOneWithoutServiceInputSchema } from './CompanyCreateNestedOneWithoutServiceInputSchema';
import { ServiceDomainCreateNestedManyWithoutServiceInputSchema } from './ServiceDomainCreateNestedManyWithoutServiceInputSchema';

export const ServiceCreateInputSchema: z.ZodType<Prisma.ServiceCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  slug: z.string(),
  name: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutServiceInputSchema),
  ServiceDomain: z.lazy(() => ServiceDomainCreateNestedManyWithoutServiceInputSchema).optional(),
});

export default ServiceCreateInputSchema;
