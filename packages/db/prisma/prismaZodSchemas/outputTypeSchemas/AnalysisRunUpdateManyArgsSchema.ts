import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRunUpdateManyMutationInputSchema } from '../inputTypeSchemas/AnalysisRunUpdateManyMutationInputSchema'
import { AnalysisRunUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AnalysisRunUncheckedUpdateManyInputSchema'
import { AnalysisRunWhereInputSchema } from '../inputTypeSchemas/AnalysisRunWhereInputSchema'

export const AnalysisRunUpdateManyArgsSchema: z.ZodType<Prisma.AnalysisRunUpdateManyArgs> = z.object({
  data: z.union([ AnalysisRunUpdateManyMutationInputSchema, AnalysisRunUncheckedUpdateManyInputSchema ]),
  where: AnalysisRunWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default AnalysisRunUpdateManyArgsSchema;
