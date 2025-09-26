import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceArgsSchema } from "../outputTypeSchemas/ServiceArgsSchema"
import { DomainArgsSchema } from "../outputTypeSchemas/DomainArgsSchema"

export const ServiceDomainIncludeSchema: z.ZodType<Prisma.ServiceDomainInclude> = z.object({
  service: z.union([z.boolean(),z.lazy(() => ServiceArgsSchema)]).optional(),
  domain: z.union([z.boolean(),z.lazy(() => DomainArgsSchema)]).optional(),
}).strict()

export default ServiceDomainIncludeSchema;
