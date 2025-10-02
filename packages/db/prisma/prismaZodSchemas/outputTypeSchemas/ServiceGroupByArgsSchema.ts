import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereInputSchema } from '../inputTypeSchemas/ServiceWhereInputSchema'
import { ServiceOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ServiceOrderByWithAggregationInputSchema'
import { ServiceScalarFieldEnumSchema } from '../inputTypeSchemas/ServiceScalarFieldEnumSchema'
import { ServiceScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ServiceScalarWhereWithAggregatesInputSchema'

export const ServiceGroupByArgsSchema: z.ZodType<Prisma.ServiceGroupByArgs> = z.object({
  where: ServiceWhereInputSchema.optional(), 
  orderBy: z.union([ ServiceOrderByWithAggregationInputSchema.array(), ServiceOrderByWithAggregationInputSchema ]).optional(),
  by: ServiceScalarFieldEnumSchema.array(), 
  having: ServiceScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ServiceGroupByArgsSchema;
