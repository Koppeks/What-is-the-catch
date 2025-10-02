import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainUncheckedCreateNestedManyWithoutServiceInputSchema } from './ServiceDomainUncheckedCreateNestedManyWithoutServiceInputSchema';

export const ServiceUncheckedCreateWithoutCompanyInputSchema: z.ZodType<Prisma.ServiceUncheckedCreateWithoutCompanyInput> = z.strictObject({
  id: z.cuid().optional(),
  slug: z.string(),
  name: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ServiceDomain: z.lazy(() => ServiceDomainUncheckedCreateNestedManyWithoutServiceInputSchema).optional(),
});

export default ServiceUncheckedCreateWithoutCompanyInputSchema;
