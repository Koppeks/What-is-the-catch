import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerStateSchema } from './TriggerStateSchema';

export const EnumTriggerStateFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTriggerStateFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => TriggerStateSchema).optional(),
});

export default EnumTriggerStateFieldUpdateOperationsInputSchema;
