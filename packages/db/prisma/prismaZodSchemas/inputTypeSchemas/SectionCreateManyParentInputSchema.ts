import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SectionCreateManyParentInputSchema: z.ZodType<Prisma.SectionCreateManyParentInput> = z.strictObject({
  id: z.cuid().optional(),
  documentId: z.string(),
  headingBlockId: z.string(),
});

export default SectionCreateManyParentInputSchema;
