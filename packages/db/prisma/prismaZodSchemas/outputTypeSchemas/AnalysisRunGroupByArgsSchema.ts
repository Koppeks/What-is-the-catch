import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRunWhereInputSchema } from '../inputTypeSchemas/AnalysisRunWhereInputSchema'
import { AnalysisRunOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AnalysisRunOrderByWithAggregationInputSchema'
import { AnalysisRunScalarFieldEnumSchema } from '../inputTypeSchemas/AnalysisRunScalarFieldEnumSchema'
import { AnalysisRunScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AnalysisRunScalarWhereWithAggregatesInputSchema'

export const AnalysisRunGroupByArgsSchema: z.ZodType<Prisma.AnalysisRunGroupByArgs> = z.object({
  where: AnalysisRunWhereInputSchema.optional(), 
  orderBy: z.union([ AnalysisRunOrderByWithAggregationInputSchema.array(), AnalysisRunOrderByWithAggregationInputSchema ]).optional(),
  by: AnalysisRunScalarFieldEnumSchema.array(), 
  having: AnalysisRunScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default AnalysisRunGroupByArgsSchema;
