import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SectionCreateManyDocumentInputSchema: z.ZodType<Prisma.SectionCreateManyDocumentInput> = z.strictObject({
  id: z.cuid().optional(),
  headingBlockId: z.string(),
  parentId: z.string().optional().nullable(),
});

export default SectionCreateManyDocumentInputSchema;
