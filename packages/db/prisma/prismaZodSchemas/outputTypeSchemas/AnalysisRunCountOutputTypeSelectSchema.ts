import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const AnalysisRunCountOutputTypeSelectSchema: z.ZodType<Prisma.AnalysisRunCountOutputTypeSelect> = z.object({
  clauseAnalyses: z.boolean().optional(),
}).strict();

export default AnalysisRunCountOutputTypeSelectSchema;
