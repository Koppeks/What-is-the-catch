import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseTypeWhereInputSchema } from '../inputTypeSchemas/ClauseTypeWhereInputSchema'
import { ClauseTypeOrderByWithRelationInputSchema } from '../inputTypeSchemas/ClauseTypeOrderByWithRelationInputSchema'
import { ClauseTypeWhereUniqueInputSchema } from '../inputTypeSchemas/ClauseTypeWhereUniqueInputSchema'

export const ClauseTypeAggregateArgsSchema: z.ZodType<Prisma.ClauseTypeAggregateArgs> = z.object({
  where: ClauseTypeWhereInputSchema.optional(),
  orderBy: z.union([ ClauseTypeOrderByWithRelationInputSchema.array(),ClauseTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: ClauseTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ClauseTypeAggregateArgs>;

export default ClauseTypeAggregateArgsSchema;
