import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerStateSchema } from './TriggerStateSchema';

export const EnumTriggerStateFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTriggerStateFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => TriggerStateSchema).optional()
}).strict() as z.ZodType<Prisma.EnumTriggerStateFieldUpdateOperationsInput>;

export default EnumTriggerStateFieldUpdateOperationsInputSchema;
