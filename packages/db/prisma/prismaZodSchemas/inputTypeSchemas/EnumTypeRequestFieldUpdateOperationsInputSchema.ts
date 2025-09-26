import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TypeRequestSchema } from './TypeRequestSchema';

export const EnumTypeRequestFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTypeRequestFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => TypeRequestSchema).optional()
}).strict() as z.ZodType<Prisma.EnumTypeRequestFieldUpdateOperationsInput>;

export default EnumTypeRequestFieldUpdateOperationsInputSchema;
