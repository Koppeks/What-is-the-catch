import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyCreateNestedOneWithoutDomainInputSchema } from './CompanyCreateNestedOneWithoutDomainInputSchema';

export const DomainCreateWithoutServiceDomainInputSchema: z.ZodType<Prisma.DomainCreateWithoutServiceDomainInput> = z.object({
  id: z.string().cuid().optional(),
  host: z.string(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutDomainInputSchema)
}).strict() as z.ZodType<Prisma.DomainCreateWithoutServiceDomainInput>;

export default DomainCreateWithoutServiceDomainInputSchema;
