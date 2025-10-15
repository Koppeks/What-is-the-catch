import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const DocumentCountOutputTypeSelectSchema: z.ZodType<Prisma.DocumentCountOutputTypeSelect> = z.object({
  runs: z.boolean().optional(),
  documentRules: z.boolean().optional(),
  Section: z.boolean().optional(),
  Block: z.boolean().optional(),
}).strict();

export default DocumentCountOutputTypeSelectSchema;
