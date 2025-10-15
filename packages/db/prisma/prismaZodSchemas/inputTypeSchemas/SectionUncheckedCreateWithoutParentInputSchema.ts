import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionUncheckedCreateNestedManyWithoutParentInputSchema } from './SectionUncheckedCreateNestedManyWithoutParentInputSchema';
import { BlockUncheckedCreateNestedManyWithoutSectionInputSchema } from './BlockUncheckedCreateNestedManyWithoutSectionInputSchema';

export const SectionUncheckedCreateWithoutParentInputSchema: z.ZodType<Prisma.SectionUncheckedCreateWithoutParentInput> = z.strictObject({
  id: z.cuid().optional(),
  documentId: z.string(),
  headingBlockId: z.string(),
  children: z.lazy(() => SectionUncheckedCreateNestedManyWithoutParentInputSchema).optional(),
  Block: z.lazy(() => BlockUncheckedCreateNestedManyWithoutSectionInputSchema).optional(),
});

export default SectionUncheckedCreateWithoutParentInputSchema;
