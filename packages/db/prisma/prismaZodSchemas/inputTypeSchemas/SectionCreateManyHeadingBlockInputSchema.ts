import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SectionCreateManyHeadingBlockInputSchema: z.ZodType<Prisma.SectionCreateManyHeadingBlockInput> = z.strictObject({
  id: z.cuid().optional(),
  documentId: z.string(),
  parentId: z.string().optional().nullable(),
});

export default SectionCreateManyHeadingBlockInputSchema;
