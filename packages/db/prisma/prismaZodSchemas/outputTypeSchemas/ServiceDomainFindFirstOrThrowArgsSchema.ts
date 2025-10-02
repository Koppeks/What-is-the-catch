import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceDomainIncludeSchema } from '../inputTypeSchemas/ServiceDomainIncludeSchema'
import { ServiceDomainWhereInputSchema } from '../inputTypeSchemas/ServiceDomainWhereInputSchema'
import { ServiceDomainOrderByWithRelationInputSchema } from '../inputTypeSchemas/ServiceDomainOrderByWithRelationInputSchema'
import { ServiceDomainWhereUniqueInputSchema } from '../inputTypeSchemas/ServiceDomainWhereUniqueInputSchema'
import { ServiceDomainScalarFieldEnumSchema } from '../inputTypeSchemas/ServiceDomainScalarFieldEnumSchema'
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

export const ServiceDomainFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ServiceDomainFindFirstOrThrowArgs> = z.object({
  select: ServiceDomainSelectSchema.optional(),
  include: z.lazy(() => ServiceDomainIncludeSchema).optional(),
  where: ServiceDomainWhereInputSchema.optional(), 
  orderBy: z.union([ ServiceDomainOrderByWithRelationInputSchema.array(), ServiceDomainOrderByWithRelationInputSchema ]).optional(),
  cursor: ServiceDomainWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ServiceDomainScalarFieldEnumSchema, ServiceDomainScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default ServiceDomainFindFirstOrThrowArgsSchema;
