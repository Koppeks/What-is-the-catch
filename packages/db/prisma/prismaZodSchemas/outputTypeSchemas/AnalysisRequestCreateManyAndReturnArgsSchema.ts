import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRequestCreateManyInputSchema } from '../inputTypeSchemas/AnalysisRequestCreateManyInputSchema'

export const AnalysisRequestCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AnalysisRequestCreateManyAndReturnArgs> = z.object({
  data: z.union([ AnalysisRequestCreateManyInputSchema,AnalysisRequestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.AnalysisRequestCreateManyAndReturnArgs>;

export default AnalysisRequestCreateManyAndReturnArgsSchema;
