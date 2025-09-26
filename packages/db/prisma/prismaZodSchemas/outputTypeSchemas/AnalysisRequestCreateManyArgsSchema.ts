import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRequestCreateManyInputSchema } from '../inputTypeSchemas/AnalysisRequestCreateManyInputSchema'

export const AnalysisRequestCreateManyArgsSchema: z.ZodType<Prisma.AnalysisRequestCreateManyArgs> = z.object({
  data: z.union([ AnalysisRequestCreateManyInputSchema,AnalysisRequestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.AnalysisRequestCreateManyArgs>;

export default AnalysisRequestCreateManyArgsSchema;
