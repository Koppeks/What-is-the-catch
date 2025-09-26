import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseWhereInputSchema } from '../inputTypeSchemas/ClauseWhereInputSchema'
import { ClauseOrderByWithRelationInputSchema } from '../inputTypeSchemas/ClauseOrderByWithRelationInputSchema'
import { ClauseWhereUniqueInputSchema } from '../inputTypeSchemas/ClauseWhereUniqueInputSchema'

export const ClauseAggregateArgsSchema: z.ZodType<Prisma.ClauseAggregateArgs> = z.object({
  where: ClauseWhereInputSchema.optional(),
  orderBy: z.union([ ClauseOrderByWithRelationInputSchema.array(),ClauseOrderByWithRelationInputSchema ]).optional(),
  cursor: ClauseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ClauseAggregateArgs>;

export default ClauseAggregateArgsSchema;
