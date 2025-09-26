import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereInputSchema } from '../inputTypeSchemas/ServiceWhereInputSchema'
import { ServiceOrderByWithRelationInputSchema } from '../inputTypeSchemas/ServiceOrderByWithRelationInputSchema'
import { ServiceWhereUniqueInputSchema } from '../inputTypeSchemas/ServiceWhereUniqueInputSchema'

export const ServiceAggregateArgsSchema: z.ZodType<Prisma.ServiceAggregateArgs> = z.object({
  where: ServiceWhereInputSchema.optional(),
  orderBy: z.union([ ServiceOrderByWithRelationInputSchema.array(),ServiceOrderByWithRelationInputSchema ]).optional(),
  cursor: ServiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ServiceAggregateArgs>;

export default ServiceAggregateArgsSchema;
