import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ClauseAnalysisCountOutputTypeSelectSchema: z.ZodType<Prisma.ClauseAnalysisCountOutputTypeSelect> = z.object({
  categoryHits: z.boolean().optional(),
}).strict();

export default ClauseAnalysisCountOutputTypeSelectSchema;
