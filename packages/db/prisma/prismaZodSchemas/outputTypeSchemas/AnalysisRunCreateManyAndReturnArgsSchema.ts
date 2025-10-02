import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRunCreateManyInputSchema } from '../inputTypeSchemas/AnalysisRunCreateManyInputSchema'

export const AnalysisRunCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AnalysisRunCreateManyAndReturnArgs> = z.object({
  data: z.union([ AnalysisRunCreateManyInputSchema, AnalysisRunCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default AnalysisRunCreateManyAndReturnArgsSchema;
