import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceArgsSchema } from "../outputTypeSchemas/ServiceArgsSchema"
import { DomainArgsSchema } from "../outputTypeSchemas/DomainArgsSchema"

export const ServiceDomainSelectSchema: z.ZodType<Prisma.ServiceDomainSelect> = z.object({
  id: z.boolean().optional(),
  serviceId: z.boolean().optional(),
  domainId: z.boolean().optional(),
  pathPattern: z.boolean().optional(),
  service: z.union([z.boolean(),z.lazy(() => ServiceArgsSchema)]).optional(),
  domain: z.union([z.boolean(),z.lazy(() => DomainArgsSchema)]).optional(),
}).strict()

export default ServiceDomainSelectSchema;
