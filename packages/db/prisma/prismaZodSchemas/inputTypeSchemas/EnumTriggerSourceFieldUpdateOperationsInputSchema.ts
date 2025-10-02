import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerSourceSchema } from './TriggerSourceSchema';

export const EnumTriggerSourceFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTriggerSourceFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => TriggerSourceSchema).optional(),
});

export default EnumTriggerSourceFieldUpdateOperationsInputSchema;
