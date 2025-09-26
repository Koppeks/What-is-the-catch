import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyArgsSchema } from "../outputTypeSchemas/CompanyArgsSchema"
import { ServiceDomainFindManyArgsSchema } from "../outputTypeSchemas/ServiceDomainFindManyArgsSchema"
import { ServiceCountOutputTypeArgsSchema } from "../outputTypeSchemas/ServiceCountOutputTypeArgsSchema"

export const ServiceSelectSchema: z.ZodType<Prisma.ServiceSelect> = z.object({
  id: z.boolean().optional(),
  companyId: z.boolean().optional(),
  slug: z.boolean().optional(),
  name: z.boolean().optional(),
  note: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
  ServiceDomain: z.union([z.boolean(),z.lazy(() => ServiceDomainFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ServiceCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ServiceSelectSchema;
