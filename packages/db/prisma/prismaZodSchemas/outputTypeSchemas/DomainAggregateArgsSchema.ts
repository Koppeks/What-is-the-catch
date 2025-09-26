import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DomainWhereInputSchema } from '../inputTypeSchemas/DomainWhereInputSchema'
import { DomainOrderByWithRelationInputSchema } from '../inputTypeSchemas/DomainOrderByWithRelationInputSchema'
import { DomainWhereUniqueInputSchema } from '../inputTypeSchemas/DomainWhereUniqueInputSchema'

export const DomainAggregateArgsSchema: z.ZodType<Prisma.DomainAggregateArgs> = z.object({
  where: DomainWhereInputSchema.optional(),
  orderBy: z.union([ DomainOrderByWithRelationInputSchema.array(),DomainOrderByWithRelationInputSchema ]).optional(),
  cursor: DomainWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.DomainAggregateArgs>;

export default DomainAggregateArgsSchema;
