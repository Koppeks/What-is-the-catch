import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeveritySchema } from './SeveritySchema';

export const NullableEnumSeverityFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumSeverityFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => SeveritySchema).optional().nullable(),
});

export default NullableEnumSeverityFieldUpdateOperationsInputSchema;
