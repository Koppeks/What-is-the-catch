import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainUncheckedCreateNestedManyWithoutDomainInputSchema } from './ServiceDomainUncheckedCreateNestedManyWithoutDomainInputSchema';

export const DomainUncheckedCreateWithoutCompanyInputSchema: z.ZodType<Prisma.DomainUncheckedCreateWithoutCompanyInput> = z.strictObject({
  id: z.cuid().optional(),
  host: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ServiceDomain: z.lazy(() => ServiceDomainUncheckedCreateNestedManyWithoutDomainInputSchema).optional(),
});

export default DomainUncheckedCreateWithoutCompanyInputSchema;
