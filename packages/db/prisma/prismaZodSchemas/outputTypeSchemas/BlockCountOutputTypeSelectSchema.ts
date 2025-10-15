import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BlockCountOutputTypeSelectSchema: z.ZodType<Prisma.BlockCountOutputTypeSelect> = z.object({
  children: z.boolean().optional(),
}).strict();

export default BlockCountOutputTypeSelectSchema;
