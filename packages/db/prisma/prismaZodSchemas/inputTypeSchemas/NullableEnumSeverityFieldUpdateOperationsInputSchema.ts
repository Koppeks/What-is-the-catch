import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SeveritySchema } from './SeveritySchema';

export const NullableEnumSeverityFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumSeverityFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => SeveritySchema).optional().nullable()
}).strict() as z.ZodType<Prisma.NullableEnumSeverityFieldUpdateOperationsInput>;

export default NullableEnumSeverityFieldUpdateOperationsInputSchema;
