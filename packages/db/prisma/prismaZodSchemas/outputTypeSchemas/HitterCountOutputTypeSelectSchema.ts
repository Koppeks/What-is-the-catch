import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const HitterCountOutputTypeSelectSchema: z.ZodType<Prisma.HitterCountOutputTypeSelect> = z.object({
  Trigger: z.boolean().optional(),
}).strict();

export default HitterCountOutputTypeSelectSchema;
