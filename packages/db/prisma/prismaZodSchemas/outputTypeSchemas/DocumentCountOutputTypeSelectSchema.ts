import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const DocumentCountOutputTypeSelectSchema: z.ZodType<Prisma.DocumentCountOutputTypeSelect> = z.object({
  blocks: z.boolean().optional(),
  runs: z.boolean().optional(),
  documentRules: z.boolean().optional(),
}).strict();

export default DocumentCountOutputTypeSelectSchema;
