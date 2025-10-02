import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseAnalysisCreateManyInputSchema } from '../inputTypeSchemas/ClauseAnalysisCreateManyInputSchema'

export const ClauseAnalysisCreateManyArgsSchema: z.ZodType<Prisma.ClauseAnalysisCreateManyArgs> = z.object({
  data: z.union([ ClauseAnalysisCreateManyInputSchema, ClauseAnalysisCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ClauseAnalysisCreateManyArgsSchema;
