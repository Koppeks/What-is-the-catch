import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseAnalysisWhereInputSchema } from '../inputTypeSchemas/ClauseAnalysisWhereInputSchema'
import { ClauseAnalysisOrderByWithRelationInputSchema } from '../inputTypeSchemas/ClauseAnalysisOrderByWithRelationInputSchema'
import { ClauseAnalysisWhereUniqueInputSchema } from '../inputTypeSchemas/ClauseAnalysisWhereUniqueInputSchema'

export const ClauseAnalysisAggregateArgsSchema: z.ZodType<Prisma.ClauseAnalysisAggregateArgs> = z.object({
  where: ClauseAnalysisWhereInputSchema.optional(),
  orderBy: z.union([ ClauseAnalysisOrderByWithRelationInputSchema.array(),ClauseAnalysisOrderByWithRelationInputSchema ]).optional(),
  cursor: ClauseAnalysisWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ClauseAnalysisAggregateArgs>;

export default ClauseAnalysisAggregateArgsSchema;
