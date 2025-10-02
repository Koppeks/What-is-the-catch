import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';

export const EnumAnalysisStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAnalysisStatusFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => AnalysisStatusSchema).optional(),
});

export default EnumAnalysisStatusFieldUpdateOperationsInputSchema;
