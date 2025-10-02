import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeveritySchema } from './SeveritySchema';

export const EnumSeverityFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumSeverityFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => SeveritySchema).optional(),
});

export default EnumSeverityFieldUpdateOperationsInputSchema;
