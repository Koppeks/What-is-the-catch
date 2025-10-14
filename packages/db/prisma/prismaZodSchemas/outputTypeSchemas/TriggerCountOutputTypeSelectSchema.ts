import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TriggerCountOutputTypeSelectSchema: z.ZodType<Prisma.TriggerCountOutputTypeSelect> = z.object({
  mergeFrom: z.boolean().optional(),
  documentRules: z.boolean().optional(),
}).strict();

export default TriggerCountOutputTypeSelectSchema;
