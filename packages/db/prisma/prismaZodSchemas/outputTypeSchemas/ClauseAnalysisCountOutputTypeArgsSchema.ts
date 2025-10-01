import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseAnalysisCountOutputTypeSelectSchema } from './ClauseAnalysisCountOutputTypeSelectSchema';

export const ClauseAnalysisCountOutputTypeArgsSchema: z.ZodType<Prisma.ClauseAnalysisCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ClauseAnalysisCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ClauseAnalysisCountOutputTypeSelectSchema;
