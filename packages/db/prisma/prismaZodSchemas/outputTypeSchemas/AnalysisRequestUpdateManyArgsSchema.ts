import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRequestUpdateManyMutationInputSchema } from '../inputTypeSchemas/AnalysisRequestUpdateManyMutationInputSchema'
import { AnalysisRequestUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AnalysisRequestUncheckedUpdateManyInputSchema'
import { AnalysisRequestWhereInputSchema } from '../inputTypeSchemas/AnalysisRequestWhereInputSchema'

export const AnalysisRequestUpdateManyArgsSchema: z.ZodType<Prisma.AnalysisRequestUpdateManyArgs> = z.object({
  data: z.union([ AnalysisRequestUpdateManyMutationInputSchema,AnalysisRequestUncheckedUpdateManyInputSchema ]),
  where: AnalysisRequestWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.AnalysisRequestUpdateManyArgs>;

export default AnalysisRequestUpdateManyArgsSchema;
