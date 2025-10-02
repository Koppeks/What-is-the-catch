import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TypeRequestSchema } from './TypeRequestSchema';

export const EnumTypeRequestFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTypeRequestFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => TypeRequestSchema).optional(),
});

export default EnumTypeRequestFieldUpdateOperationsInputSchema;
