import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ClauseAnalysisCreatetriggerWarningsInputSchema: z.ZodType<Prisma.ClauseAnalysisCreatetriggerWarningsInput> = z.object({
  set: z.string().array()
}).strict() as z.ZodType<Prisma.ClauseAnalysisCreatetriggerWarningsInput>;

export default ClauseAnalysisCreatetriggerWarningsInputSchema;
