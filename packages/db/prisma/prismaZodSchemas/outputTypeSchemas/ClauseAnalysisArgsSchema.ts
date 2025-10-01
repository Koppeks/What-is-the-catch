import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClauseAnalysisSelectSchema } from '../inputTypeSchemas/ClauseAnalysisSelectSchema';
import { ClauseAnalysisIncludeSchema } from '../inputTypeSchemas/ClauseAnalysisIncludeSchema';

export const ClauseAnalysisArgsSchema: z.ZodType<Prisma.ClauseAnalysisDefaultArgs> = z.object({
  select: z.lazy(() => ClauseAnalysisSelectSchema).optional(),
  include: z.lazy(() => ClauseAnalysisIncludeSchema).optional(),
}).strict();

export default ClauseAnalysisArgsSchema;
