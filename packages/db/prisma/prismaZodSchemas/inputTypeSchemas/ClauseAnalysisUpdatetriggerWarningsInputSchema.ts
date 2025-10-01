import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ClauseAnalysisUpdatetriggerWarningsInputSchema: z.ZodType<Prisma.ClauseAnalysisUpdatetriggerWarningsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseAnalysisUpdatetriggerWarningsInput>;

export default ClauseAnalysisUpdatetriggerWarningsInputSchema;
