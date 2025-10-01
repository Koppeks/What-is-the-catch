import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseAnalysisWhereInputSchema } from '../inputTypeSchemas/ClauseAnalysisWhereInputSchema'

export const ClauseAnalysisDeleteManyArgsSchema: z.ZodType<Prisma.ClauseAnalysisDeleteManyArgs> = z.object({
  where: ClauseAnalysisWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.ClauseAnalysisDeleteManyArgs>;

export default ClauseAnalysisDeleteManyArgsSchema;
