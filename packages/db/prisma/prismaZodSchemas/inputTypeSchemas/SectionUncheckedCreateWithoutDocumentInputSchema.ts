import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionUncheckedCreateNestedManyWithoutParentInputSchema } from './SectionUncheckedCreateNestedManyWithoutParentInputSchema';
import { BlockUncheckedCreateNestedManyWithoutSectionInputSchema } from './BlockUncheckedCreateNestedManyWithoutSectionInputSchema';

export const SectionUncheckedCreateWithoutDocumentInputSchema: z.ZodType<Prisma.SectionUncheckedCreateWithoutDocumentInput> = z.strictObject({
  id: z.cuid().optional(),
  headingBlockId: z.string(),
  parentId: z.string().optional().nullable(),
  children: z.lazy(() => SectionUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
  Block: z.lazy(() => BlockUncheckedCreateNestedManyWithoutSectionInputSchema).optional(),
});

export default SectionUncheckedCreateWithoutDocumentInputSchema;
