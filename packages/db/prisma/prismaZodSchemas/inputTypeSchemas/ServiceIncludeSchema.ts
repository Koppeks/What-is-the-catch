import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyArgsSchema } from "../outputTypeSchemas/CompanyArgsSchema"
import { ServiceDomainFindManyArgsSchema } from "../outputTypeSchemas/ServiceDomainFindManyArgsSchema"
import { ServiceCountOutputTypeArgsSchema } from "../outputTypeSchemas/ServiceCountOutputTypeArgsSchema"

export const ServiceIncludeSchema: z.ZodType<Prisma.ServiceInclude> = z.object({
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
  ServiceDomain: z.union([z.boolean(),z.lazy(() => ServiceDomainFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ServiceCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ServiceIncludeSchema;
