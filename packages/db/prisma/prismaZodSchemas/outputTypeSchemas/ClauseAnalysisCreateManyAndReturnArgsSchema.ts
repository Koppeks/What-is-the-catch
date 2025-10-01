import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseAnalysisCreateManyInputSchema } from '../inputTypeSchemas/ClauseAnalysisCreateManyInputSchema'

export const ClauseAnalysisCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ClauseAnalysisCreateManyAndReturnArgs> = z.object({
  data: z.union([ ClauseAnalysisCreateManyInputSchema,ClauseAnalysisCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.ClauseAnalysisCreateManyAndReturnArgs>;

export default ClauseAnalysisCreateManyAndReturnArgsSchema;
