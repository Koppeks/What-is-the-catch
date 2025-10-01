import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseAnalysisWhereInputSchema } from '../inputTypeSchemas/ClauseAnalysisWhereInputSchema'
import { ClauseAnalysisOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ClauseAnalysisOrderByWithAggregationInputSchema'
import { ClauseAnalysisScalarFieldEnumSchema } from '../inputTypeSchemas/ClauseAnalysisScalarFieldEnumSchema'
import { ClauseAnalysisScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ClauseAnalysisScalarWhereWithAggregatesInputSchema'

export const ClauseAnalysisGroupByArgsSchema: z.ZodType<Prisma.ClauseAnalysisGroupByArgs> = z.object({
  where: ClauseAnalysisWhereInputSchema.optional(),
  orderBy: z.union([ ClauseAnalysisOrderByWithAggregationInputSchema.array(),ClauseAnalysisOrderByWithAggregationInputSchema ]).optional(),
  by: ClauseAnalysisScalarFieldEnumSchema.array(),
  having: ClauseAnalysisScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ClauseAnalysisGroupByArgs>;

export default ClauseAnalysisGroupByArgsSchema;
