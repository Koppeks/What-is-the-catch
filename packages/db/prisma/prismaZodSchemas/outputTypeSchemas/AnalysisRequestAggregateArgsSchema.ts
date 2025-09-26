import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRequestWhereInputSchema } from '../inputTypeSchemas/AnalysisRequestWhereInputSchema'
import { AnalysisRequestOrderByWithRelationInputSchema } from '../inputTypeSchemas/AnalysisRequestOrderByWithRelationInputSchema'
import { AnalysisRequestWhereUniqueInputSchema } from '../inputTypeSchemas/AnalysisRequestWhereUniqueInputSchema'

export const AnalysisRequestAggregateArgsSchema: z.ZodType<Prisma.AnalysisRequestAggregateArgs> = z.object({
  where: AnalysisRequestWhereInputSchema.optional(),
  orderBy: z.union([ AnalysisRequestOrderByWithRelationInputSchema.array(),AnalysisRequestOrderByWithRelationInputSchema ]).optional(),
  cursor: AnalysisRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.AnalysisRequestAggregateArgs>;

export default AnalysisRequestAggregateArgsSchema;
