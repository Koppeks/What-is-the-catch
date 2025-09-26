import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRequestCountOutputTypeSelectSchema } from './AnalysisRequestCountOutputTypeSelectSchema';

export const AnalysisRequestCountOutputTypeArgsSchema: z.ZodType<Prisma.AnalysisRequestCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => AnalysisRequestCountOutputTypeSelectSchema).nullish(),
}).strict();

export default AnalysisRequestCountOutputTypeSelectSchema;
