import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRunSelectSchema } from '../inputTypeSchemas/AnalysisRunSelectSchema';
import { AnalysisRunIncludeSchema } from '../inputTypeSchemas/AnalysisRunIncludeSchema';

export const AnalysisRunArgsSchema: z.ZodType<Prisma.AnalysisRunDefaultArgs> = z.object({
  select: z.lazy(() => AnalysisRunSelectSchema).optional(),
  include: z.lazy(() => AnalysisRunIncludeSchema).optional(),
}).strict();

export default AnalysisRunArgsSchema;
