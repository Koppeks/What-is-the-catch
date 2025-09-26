import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const AnalysisRequestCountOutputTypeSelectSchema: z.ZodType<Prisma.AnalysisRequestCountOutputTypeSelect> = z.object({
  clauses: z.boolean().optional(),
  triggers: z.boolean().optional(),
}).strict();

export default AnalysisRequestCountOutputTypeSelectSchema;
