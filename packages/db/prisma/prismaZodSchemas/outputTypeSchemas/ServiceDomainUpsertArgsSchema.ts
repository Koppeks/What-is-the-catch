import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceDomainIncludeSchema } from '../inputTypeSchemas/ServiceDomainIncludeSchema'
import { ServiceDomainWhereUniqueInputSchema } from '../inputTypeSchemas/ServiceDomainWhereUniqueInputSchema'
import { ServiceDomainCreateInputSchema } from '../inputTypeSchemas/ServiceDomainCreateInputSchema'
import { ServiceDomainUncheckedCreateInputSchema } from '../inputTypeSchemas/ServiceDomainUncheckedCreateInputSchema'
import { ServiceDomainUpdateInputSchema } from '../inputTypeSchemas/ServiceDomainUpdateInputSchema'
import { ServiceDomainUncheckedUpdateInputSchema } from '../inputTypeSchemas/ServiceDomainUncheckedUpdateInputSchema'
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

export const ServiceDomainUpsertArgsSchema: z.ZodType<Prisma.ServiceDomainUpsertArgs> = z.object({
  select: ServiceDomainSelectSchema.optional(),
  include: z.lazy(() => ServiceDomainIncludeSchema).optional(),
  where: ServiceDomainWhereUniqueInputSchema,
  create: z.union([ ServiceDomainCreateInputSchema,ServiceDomainUncheckedCreateInputSchema ]),
  update: z.union([ ServiceDomainUpdateInputSchema,ServiceDomainUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.ServiceDomainUpsertArgs>;

export default ServiceDomainUpsertArgsSchema;
