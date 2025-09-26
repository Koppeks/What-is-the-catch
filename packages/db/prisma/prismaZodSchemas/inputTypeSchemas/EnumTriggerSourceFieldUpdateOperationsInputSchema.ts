import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerSourceSchema } from './TriggerSourceSchema';

export const EnumTriggerSourceFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTriggerSourceFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => TriggerSourceSchema).optional()
}).strict() as z.ZodType<Prisma.EnumTriggerSourceFieldUpdateOperationsInput>;

export default EnumTriggerSourceFieldUpdateOperationsInputSchema;
