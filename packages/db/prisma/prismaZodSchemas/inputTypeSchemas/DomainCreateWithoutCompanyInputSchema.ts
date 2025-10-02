import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainCreateNestedManyWithoutDomainInputSchema } from './ServiceDomainCreateNestedManyWithoutDomainInputSchema';

export const DomainCreateWithoutCompanyInputSchema: z.ZodType<Prisma.DomainCreateWithoutCompanyInput> = z.strictObject({
  id: z.cuid().optional(),
  host: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ServiceDomain: z.lazy(() => ServiceDomainCreateNestedManyWithoutDomainInputSchema).optional(),
});

export default DomainCreateWithoutCompanyInputSchema;
