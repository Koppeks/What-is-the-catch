import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRunWhereInputSchema } from '../inputTypeSchemas/AnalysisRunWhereInputSchema'
import { AnalysisRunOrderByWithRelationInputSchema } from '../inputTypeSchemas/AnalysisRunOrderByWithRelationInputSchema'
import { AnalysisRunWhereUniqueInputSchema } from '../inputTypeSchemas/AnalysisRunWhereUniqueInputSchema'

export const AnalysisRunAggregateArgsSchema: z.ZodType<Prisma.AnalysisRunAggregateArgs> = z.object({
  where: AnalysisRunWhereInputSchema.optional(),
  orderBy: z.union([ AnalysisRunOrderByWithRelationInputSchema.array(),AnalysisRunOrderByWithRelationInputSchema ]).optional(),
  cursor: AnalysisRunWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.AnalysisRunAggregateArgs>;

export default AnalysisRunAggregateArgsSchema;
