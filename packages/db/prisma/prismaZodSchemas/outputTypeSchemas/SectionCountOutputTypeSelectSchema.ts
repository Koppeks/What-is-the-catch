import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const SectionCountOutputTypeSelectSchema: z.ZodType<Prisma.SectionCountOutputTypeSelect> = z.object({
  children: z.boolean().optional(),
  Block: z.boolean().optional(),
}).strict();

export default SectionCountOutputTypeSelectSchema;
