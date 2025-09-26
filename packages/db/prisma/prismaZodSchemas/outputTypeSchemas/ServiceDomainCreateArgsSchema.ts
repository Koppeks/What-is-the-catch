import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceDomainIncludeSchema } from '../inputTypeSchemas/ServiceDomainIncludeSchema'
import { ServiceDomainCreateInputSchema } from '../inputTypeSchemas/ServiceDomainCreateInputSchema'
import { ServiceDomainUncheckedCreateInputSchema } from '../inputTypeSchemas/ServiceDomainUncheckedCreateInputSchema'
import { ServiceArgsSchema } from "../outputTypeSchemas/ServiceArgsSchema"
import { DomainArgsSchema } from "../outputTypeSchemas/DomainArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ServiceDomainSelectSchema: z.ZodType<Prisma.ServiceDomainSelect> = z.object({
  id: z.boolean().optional(),
  serviceId: z.boolean().optional(),
  domainId: z.boolean().optional(),
  pathPattern: z.boolean().optional(),
  service: z.union([z.boolean(),z.lazy(() => ServiceArgsSchema)]).optional(),
  domain: z.union([z.boolean(),z.lazy(() => DomainArgsSchema)]).optional(),
}).strict()

export const ServiceDomainCreateArgsSchema: z.ZodType<Prisma.ServiceDomainCreateArgs> = z.object({
  select: ServiceDomainSelectSchema.optional(),
  include: z.lazy(() => ServiceDomainIncludeSchema).optional(),
  data: z.union([ ServiceDomainCreateInputSchema,ServiceDomainUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.ServiceDomainCreateArgs>;

export default ServiceDomainCreateArgsSchema;
