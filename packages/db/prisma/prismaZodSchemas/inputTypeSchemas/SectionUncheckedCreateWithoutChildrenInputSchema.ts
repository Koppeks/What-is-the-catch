import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockUncheckedCreateNestedManyWithoutSectionInputSchema } from './BlockUncheckedCreateNestedManyWithoutSectionInputSchema';

export const SectionUncheckedCreateWithoutChildrenInputSchema: z.ZodType<Prisma.SectionUncheckedCreateWithoutChildrenInput> = z.strictObject({
  id: z.cuid().optional(),
  documentId: z.string(),
  headingBlockId: z.string(),
  parentId: z.string().optional().nullable(),
  Block: z.lazy(() => BlockUncheckedCreateNestedManyWithoutSectionInputSchema).optional(),
});

export default SectionUncheckedCreateWithoutChildrenInputSchema;
