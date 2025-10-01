import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnalysisRunCountOutputTypeSelectSchema } from './AnalysisRunCountOutputTypeSelectSchema';

export const AnalysisRunCountOutputTypeArgsSchema: z.ZodType<Prisma.AnalysisRunCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => AnalysisRunCountOutputTypeSelectSchema).nullish(),
}).strict();

export default AnalysisRunCountOutputTypeSelectSchema;
