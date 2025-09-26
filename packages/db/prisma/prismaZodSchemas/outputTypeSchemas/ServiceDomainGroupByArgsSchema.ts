import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceDomainWhereInputSchema } from '../inputTypeSchemas/ServiceDomainWhereInputSchema'
import { ServiceDomainOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ServiceDomainOrderByWithAggregationInputSchema'
import { ServiceDomainScalarFieldEnumSchema } from '../inputTypeSchemas/ServiceDomainScalarFieldEnumSchema'
import { ServiceDomainScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ServiceDomainScalarWhereWithAggregatesInputSchema'

export const ServiceDomainGroupByArgsSchema: z.ZodType<Prisma.ServiceDomainGroupByArgs> = z.object({
  where: ServiceDomainWhereInputSchema.optional(),
  orderBy: z.union([ ServiceDomainOrderByWithAggregationInputSchema.array(),ServiceDomainOrderByWithAggregationInputSchema ]).optional(),
  by: ServiceDomainScalarFieldEnumSchema.array(),
  having: ServiceDomainScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ServiceDomainGroupByArgs>;

export default ServiceDomainGroupByArgsSchema;
