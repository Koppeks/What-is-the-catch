import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';

export const EnumAnalysisStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAnalysisStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => AnalysisStatusSchema).optional()
}).strict() as z.ZodType<Prisma.EnumAnalysisStatusFieldUpdateOperationsInput>;

export default EnumAnalysisStatusFieldUpdateOperationsInputSchema;
