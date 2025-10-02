import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseAnalysisUpdateManyMutationInputSchema } from '../inputTypeSchemas/ClauseAnalysisUpdateManyMutationInputSchema'
import { ClauseAnalysisUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ClauseAnalysisUncheckedUpdateManyInputSchema'
import { ClauseAnalysisWhereInputSchema } from '../inputTypeSchemas/ClauseAnalysisWhereInputSchema'

export const ClauseAnalysisUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ClauseAnalysisUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ClauseAnalysisUpdateManyMutationInputSchema, ClauseAnalysisUncheckedUpdateManyInputSchema ]),
  where: ClauseAnalysisWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ClauseAnalysisUpdateManyAndReturnArgsSchema;
