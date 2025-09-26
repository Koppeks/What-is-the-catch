import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRequestWhereInputSchema } from '../inputTypeSchemas/AnalysisRequestWhereInputSchema'
import { AnalysisRequestOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AnalysisRequestOrderByWithAggregationInputSchema'
import { AnalysisRequestScalarFieldEnumSchema } from '../inputTypeSchemas/AnalysisRequestScalarFieldEnumSchema'
import { AnalysisRequestScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AnalysisRequestScalarWhereWithAggregatesInputSchema'

export const AnalysisRequestGroupByArgsSchema: z.ZodType<Prisma.AnalysisRequestGroupByArgs> = z.object({
  where: AnalysisRequestWhereInputSchema.optional(),
  orderBy: z.union([ AnalysisRequestOrderByWithAggregationInputSchema.array(),AnalysisRequestOrderByWithAggregationInputSchema ]).optional(),
  by: AnalysisRequestScalarFieldEnumSchema.array(),
  having: AnalysisRequestScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.AnalysisRequestGroupByArgs>;

export default AnalysisRequestGroupByArgsSchema;
