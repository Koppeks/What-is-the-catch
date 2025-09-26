import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyArgsSchema } from "../outputTypeSchemas/CompanyArgsSchema"
import { ServiceDomainFindManyArgsSchema } from "../outputTypeSchemas/ServiceDomainFindManyArgsSchema"
import { DomainCountOutputTypeArgsSchema } from "../outputTypeSchemas/DomainCountOutputTypeArgsSchema"

export const DomainSelectSchema: z.ZodType<Prisma.DomainSelect> = z.object({
  id: z.boolean().optional(),
  companyId: z.boolean().optional(),
  host: z.boolean().optional(),
  note: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
  ServiceDomain: z.union([z.boolean(),z.lazy(() => ServiceDomainFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DomainCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default DomainSelectSchema;
