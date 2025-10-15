import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SectionCreateManyInputSchema: z.ZodType<Prisma.SectionCreateManyInput> = z.strictObject({
  id: z.cuid().optional(),
  documentId: z.string(),
  headingBlockId: z.string(),
  parentId: z.string().optional().nullable(),
});

export default SectionCreateManyInputSchema;
