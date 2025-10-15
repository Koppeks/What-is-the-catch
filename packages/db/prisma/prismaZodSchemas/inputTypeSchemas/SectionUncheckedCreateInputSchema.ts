import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionUncheckedCreateNestedManyWithoutParentInputSchema } from './SectionUncheckedCreateNestedManyWithoutParentInputSchema';
import { BlockUncheckedCreateNestedManyWithoutSectionInputSchema } from './BlockUncheckedCreateNestedManyWithoutSectionInputSchema';

export const SectionUncheckedCreateInputSchema: z.ZodType<Prisma.SectionUncheckedCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  documentId: z.string(),
  headingBlockId: z.string(),
  parentId: z.string().optional().nullable(),
  children: z.lazy(() => SectionUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
  Block: z.lazy(() => BlockUncheckedCreateNestedManyWithoutSectionInputSchema).optional(),
});

export default SectionUncheckedCreateInputSchema;
