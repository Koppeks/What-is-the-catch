import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRequestSelectSchema } from '../inputTypeSchemas/AnalysisRequestSelectSchema';
import { AnalysisRequestIncludeSchema } from '../inputTypeSchemas/AnalysisRequestIncludeSchema';

export const AnalysisRequestArgsSchema: z.ZodType<Prisma.AnalysisRequestDefaultArgs> = z.object({
  select: z.lazy(() => AnalysisRequestSelectSchema).optional(),
  include: z.lazy(() => AnalysisRequestIncludeSchema).optional(),
}).strict();

export default AnalysisRequestArgsSchema;
