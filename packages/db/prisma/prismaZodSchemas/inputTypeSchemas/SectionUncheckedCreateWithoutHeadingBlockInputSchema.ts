import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionUncheckedCreateNestedManyWithoutParentInputSchema } from './SectionUncheckedCreateNestedManyWithoutParentInputSchema';
import { BlockUncheckedCreateNestedManyWithoutSectionInputSchema } from './BlockUncheckedCreateNestedManyWithoutSectionInputSchema';

export const SectionUncheckedCreateWithoutHeadingBlockInputSchema: z.ZodType<Prisma.SectionUncheckedCreateWithoutHeadingBlockInput> = z.strictObject({
  id: z.cuid().optional(),
  documentId: z.string(),
  parentId: z.string().optional().nullable(),
  children: z.lazy(() => SectionUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
  Block: z.lazy(() => BlockUncheckedCreateNestedManyWithoutSectionInputSchema).optional(),
});

export default SectionUncheckedCreateWithoutHeadingBlockInputSchema;
