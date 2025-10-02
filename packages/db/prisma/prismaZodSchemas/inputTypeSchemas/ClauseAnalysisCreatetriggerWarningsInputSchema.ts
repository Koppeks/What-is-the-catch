import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ClauseAnalysisCreatetriggerWarningsInputSchema: z.ZodType<Prisma.ClauseAnalysisCreatetriggerWarningsInput> = z.strictObject({
  set: z.string().array(),
});

export default ClauseAnalysisCreatetriggerWarningsInputSchema;
