import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRunUpdateManyMutationInputSchema } from '../inputTypeSchemas/AnalysisRunUpdateManyMutationInputSchema'
import { AnalysisRunUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AnalysisRunUncheckedUpdateManyInputSchema'
import { AnalysisRunWhereInputSchema } from '../inputTypeSchemas/AnalysisRunWhereInputSchema'

export const AnalysisRunUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.AnalysisRunUpdateManyAndReturnArgs> = z.object({
  data: z.union([ AnalysisRunUpdateManyMutationInputSchema,AnalysisRunUncheckedUpdateManyInputSchema ]),
  where: AnalysisRunWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.AnalysisRunUpdateManyAndReturnArgs>;

export default AnalysisRunUpdateManyAndReturnArgsSchema;
