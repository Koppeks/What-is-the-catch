import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeveritySchema } from './SeveritySchema';

export const EnumSeverityFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumSeverityFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => SeveritySchema).optional()
}).strict() as z.ZodType<Prisma.EnumSeverityFieldUpdateOperationsInput>;

export default EnumSeverityFieldUpdateOperationsInputSchema;
