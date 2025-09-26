import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceDomainUncheckedCreateNestedManyWithoutDomainInputSchema } from './ServiceDomainUncheckedCreateNestedManyWithoutDomainInputSchema';

export const DomainUncheckedCreateWithoutCompanyInputSchema: z.ZodType<Prisma.DomainUncheckedCreateWithoutCompanyInput> = z.object({
  id: z.string().cuid().optional(),
  host: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ServiceDomain: z.lazy(() => ServiceDomainUncheckedCreateNestedManyWithoutDomainInputSchema).optional()
}).strict() as z.ZodType<Prisma.DomainUncheckedCreateWithoutCompanyInput>;

export default DomainUncheckedCreateWithoutCompanyInputSchema;
