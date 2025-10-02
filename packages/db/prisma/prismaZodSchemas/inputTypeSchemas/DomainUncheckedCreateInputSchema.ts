import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainUncheckedCreateNestedManyWithoutDomainInputSchema } from './ServiceDomainUncheckedCreateNestedManyWithoutDomainInputSchema';

export const DomainUncheckedCreateInputSchema: z.ZodType<Prisma.DomainUncheckedCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  companyId: z.string(),
  host: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ServiceDomain: z.lazy(() => ServiceDomainUncheckedCreateNestedManyWithoutDomainInputSchema).optional(),
});

export default DomainUncheckedCreateInputSchema;
