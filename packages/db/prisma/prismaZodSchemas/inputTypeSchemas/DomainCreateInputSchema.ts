import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyCreateNestedOneWithoutDomainInputSchema } from './CompanyCreateNestedOneWithoutDomainInputSchema';
import { ServiceDomainCreateNestedManyWithoutDomainInputSchema } from './ServiceDomainCreateNestedManyWithoutDomainInputSchema';

export const DomainCreateInputSchema: z.ZodType<Prisma.DomainCreateInput> = z.object({
  id: z.string().cuid().optional(),
  host: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutDomainInputSchema),
  ServiceDomain: z.lazy(() => ServiceDomainCreateNestedManyWithoutDomainInputSchema).optional()
}).strict() as z.ZodType<Prisma.DomainCreateInput>;

export default DomainCreateInputSchema;
